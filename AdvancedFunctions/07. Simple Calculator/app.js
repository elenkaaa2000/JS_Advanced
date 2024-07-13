function registerHeroes(heroesDescription) {
    const heroes = heroesDescription.map(hero => {
        const [name, levelStr, items] = hero.split(' / ');
        return {
            name,
            level: Number(levelStr),
            items: items ? items.split(', ') : []
        }
    });

    return JSON.stringify(heroes.trim());
}




