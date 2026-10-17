import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import axe from 'axe-core';
import { SiteRoutes } from '../src/routes';

function HistoryControls() {
    const navigate = useNavigate();
    return <div><button onClick={() => navigate(-1)}>Go back</button><button onClick={() => navigate(1)}>Go forward</button></div>;
}

function renderSite(path = '/', history = false) {
    return render(<MemoryRouter initialEntries={[path]}>{history && <HistoryControls />}<SiteRoutes /></MemoryRouter>);
}

describe('public routes', () => {
    it.each([
        ['/', 'Habit & Behaviour'], ['/About/', 'Habit & Behaviour'],
        ['/Research', 'Research'], ['/CapstoneProjects', 'Capstone Projects'],
        ['/People', 'People'], ['/Contact', 'Contact'],
        ['/experiments', 'Experiments and Explorations'],
        ['/ExperimentsandExplorations', 'Experiments and Explorations'],
        ['/missing-page', 'Page not found'],
    ])('renders a useful page at %s', (path, title) => {
        renderSite(path);
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    });

    it('marks Research as current on a direct visit and after browser history changes', async () => {
        const user = userEvent.setup();
        renderSite('/Research', true);
        expect(screen.getByRole('link', { name: 'Research' })).toHaveAttribute('aria-current', 'page');
        await user.click(screen.getByRole('link', { name: 'Capstone Projects' }));
        expect(screen.getByRole('link', { name: 'Capstone Projects' })).toHaveAttribute('aria-current', 'page');
        expect(screen.getByRole('main')).toHaveFocus();
        await user.click(screen.getByRole('button', { name: 'Go back' }));
        expect(screen.getByRole('link', { name: 'Research' })).toHaveAttribute('aria-current', 'page');
        await user.click(screen.getByRole('button', { name: 'Go forward' }));
        expect(screen.getByRole('link', { name: 'Capstone Projects' })).toHaveAttribute('aria-current', 'page');
    });

    it('lets visitors recover from an unknown URL', async () => {
        const user = userEvent.setup();
        renderSite('/missing-page');
        await user.click(screen.getByRole('link', { name: 'Back to About' }));
        expect(screen.getByRole('heading', { level: 1, name: 'Habit & Behaviour' })).toBeInTheDocument();
        expect(document.title).toBe('About | Habit & Behaviour');
    });

    it('closes the navigation with Escape and restores focus', async () => {
        const user = userEvent.setup();
        renderSite('/Research');
        await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
        expect(screen.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute('aria-expanded', 'true');
        screen.getByRole('link', { name: 'People' }).focus();
        await user.keyboard('{Escape}');
        expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveFocus();
        expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes the navigation when a destination is selected', async () => {
        const user = userEvent.setup();
        renderSite('/Research');
        await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
        await user.click(screen.getByRole('link', { name: 'People' }));
        expect(screen.getByText('Content coming soon.')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
    });
});

describe('documents and content', () => {
    it('keeps placeholder projects but only links to available documents', () => {
        renderSite('/CapstoneProjects');
        expect(screen.getAllByRole('heading', { name: 'Lorem Ipsum' })).toHaveLength(4);
        expect(screen.getAllByText('Document unavailable')).toHaveLength(3);
        const main = screen.getByRole('main');
        const links = within(main).getAllByRole('link');
        expect(links).toHaveLength(1);
        expect(links[0]).toHaveAttribute('href', '/assets/capstonePapers/sharon.pdf');
        expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('opens research papers using the named semester disclosure', async () => {
        const user = userEvent.setup();
        renderSite('/Research');
        await user.click(screen.getByText('Odd sem 2022-2023'));
        expect(screen.getByText('Odd sem 2022-2023').closest('details')).toHaveAttribute('open');
        expect(screen.getByRole('link', { name: /View Interventions in the artisanal process/ })).toHaveAttribute('href', '/assets/researchPapers/Aniket Patil And Shreyas Desai .pdf');
        await user.click(screen.getByText('Odd sem 2022-2023'));
        expect(screen.getByText('Odd sem 2022-2023').closest('details')).not.toHaveAttribute('open');
    });

    it('provides responsive image candidates on a trailing-slash URL', () => {
        const { container } = renderSite('/About/');
        for (const image of container.querySelectorAll('img')) {
            expect(image.getAttribute('src')).toMatch(/^\/assets\/images\/optimized\//);
            expect(image).toHaveAttribute('srcset');
            expect(image).toHaveAttribute('width');
            expect(image.getAttribute('alt')).toBeTruthy();
        }
        for (const image of container.querySelectorAll('.aboutPageImg')) expect(image).toHaveAttribute('loading', 'lazy');
    });
});

describe('accessibility structure', () => {
    it.each(['/', '/Research', '/CapstoneProjects', '/experiments', '/People', '/missing-page'])('has no detectable markup accessibility violations on %s', async path => {
        const { container } = renderSite(path);
        const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
        expect(results.violations.map(v => ({ id: v.id, impact: v.impact, targets: v.nodes.map(n => n.target) }))).toEqual([]);
    });
});
