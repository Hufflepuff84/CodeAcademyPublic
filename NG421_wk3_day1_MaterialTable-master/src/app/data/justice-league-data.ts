import { JusticeLeagueMember } from '../interfaces/justice-league-member';


const JUSTICE_LEAGUE_MEMBERS: JusticeLeagueMember[] = [
    {
        name: 'Superman',
        alias: 'Clark Kent',
        age: 41,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['flight', 'invulnerability', 'heat vision']
    },
    {
        name: 'Batman',
        alias: 'Bruce Wayne',
        age: 39,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['none']
    },
    {
        name: 'Wonder Women',
        alias: 'Diana Prince',
        age: 35,
        currentMember: true,
        memberSince: new Date('10/25/1947'),
        powers: ['flight', 'invulnerability', 'strength']
    },
    {
        name: 'Green Lantern',
        alias: 'Hal Jordan',
        age: 37,
        currentMember: false,
        memberSince: new Date('04/07/1955'),
        powers: ['ring']
    },
    {
        name: 'Flash',
        alias: 'Barry Allen',
        age: 29,
        currentMember: false,
        memberSince: new Date('09/06/1962'),
        powers: ['speed', 'time travel']
    }
];

export {JUSTICE_LEAGUE_MEMBERS};
