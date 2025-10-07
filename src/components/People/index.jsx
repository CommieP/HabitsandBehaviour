import React from 'react';

const people = [
    {
        name: 'Dr. Sanjukta Ghosh',
        role: 'Lab Director',
        bio: 'Dr. Ghosh leads the TDR Lab with a focus on transdisciplinary research at the intersection of Behavioral Science and Design.',
    },
    {
        name: 'Madhusudhan D',
        role: 'Lab Assistant',
        bio: 'Madhusudhan supports the lab operations and assists in various research projects.',
    },
    {
        name: 'Aditya Dev',
        role: 'Web Developer',
        bio: 'Aditya is responsible for developing and maintaining the lab\'s web presence.',
    },
];

const People = () => (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our People</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {people.map((person) => (
                <div
                    key={person.name}
                    style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        padding: '1.5rem',
                        width: 260,
                        textAlign: 'center',
                    }}
                >
                    <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{person.name}</h3>
                    <p style={{ color: '#888', margin: 0 }}>{person.role}</p>
                    <p style={{ fontSize: 15, marginTop: '1rem' }}>{person.bio}</p>
                </div>
            ))}
        </div>
    </div>
);

export default People;