const { defineFeature, loadFeature } = require('jest-cucumber');

const Rocket = require('../src/Rocket');
const feature = loadFeature('./test/features/RocketLaunching.feature');

defineFeature(feature, test => {
    test('Launching a SpaceX rocket', ({ given, when, then }) => {
        let rocket;

        given('I am Elon Musk attempting to launch a rocket into space', () => {
            rocket = new Rocket();
        });

        when('I launch the rocket', () => {
            rocket.launch();
        });

        then('the rocket should end up in space', () => {
            expect(rocket.isInSpace).toBe(true);
        });

        then('the booster(s) should land back on the launch pad', () => {
            expect(rocket.boostersLanded).toBe(true);
        });

        then('nobody should doubt me ever again', () => {
            expect('people').not.toBe('haters');
        });
    });

    test('SpaceX rocket flight speed', ({ given, when, then }) => {
        let rocket;

        given('rocket can be built', () => {
            rocket = new Rocket();
        });

        when('I launch a rocket to the moon', () => {
            rocket.launch('384400');
        });

        then(/^the rocket should fly for (.*) days$/, (flightTimeInDays) => {
            expect(rocket.flightTime).toBe(parseInt(flightTimeInDays, 10));
        });
    });

    test('SpaceX rocket flight speed somewhere', ({ given, when, then }) => {
        let rocket;

        given('rocket can be built', () => {
            rocket = new Rocket();
        });

        when('I launch a rocket to the mars', () => {
            rocket.launch('768800');
        });

        then(/^the rocket should fly for (.*) days$/, (flightTimeInDays) => {
            expect(rocket.flightTime).toBe(parseInt(flightTimeInDays, 10));
        });
    });
});