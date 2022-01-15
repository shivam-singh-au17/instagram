
const create = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const get = (model) => async (req, res) => {
    try {
        const item = await model.find().lean().exec();
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const update = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const deleteOne = (model, itemName) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id);
        return res.status(200).json({ [itemName]: item });

    } catch (err) {
        return res.status(400).send(err.message);
    }
};


module.exports = (model, itemName) => ({
    create: create(model),
    get: get(model),
    getOne: getOne(model),
    update: update(model),
    deleteOne: deleteOne(model, itemName)
});
