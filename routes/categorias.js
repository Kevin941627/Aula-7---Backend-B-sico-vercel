router.get('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('categorias')
            .select('*')
            .order('id', { ascending: true });

        if (error)  throw error;
        
        res.status(201).json(data[0]);
    } catch (err) {
        next(err);
    }
});

module.exports = router;











