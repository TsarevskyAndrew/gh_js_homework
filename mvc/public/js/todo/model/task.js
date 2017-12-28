let tasks = new TaskModel([
    {
        text: 'Brew coffee',
        done: true,
        date: new Date(2017, 12, 27).toLocaleString('ru', options)
    },
    {
        text: 'Write some code',
        done: false,
        date: new Date(2017, 12, 30).toLocaleString('ru', options)
    },
    {
        text: 'Sleep',
        done: false,
        date: new Date(2020, 01, 01).toLocaleString('ru', options)
    }
]);
