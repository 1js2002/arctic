import Product from "../models/product";

export const newProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
