const Medicine = require("../model/Medicine");



//get all medicines
const getMedicines = async (req, res) => {
    try {
        const Medicines = await Medicine.find({});
        res.status(200).json(Medicines);
    }
    catch (error) {
        res.status(500).json({ message: error.message })

    }
};

//Get a single medicine by id 
const getMedicine= async (req, res) => {
    try {
        const { id } = req.params;
        const medicine = await Medicine.findById(id);
        if(!medicine){
        res.status(400).json({message:"Medicine not found"});
        }
        res.status(200).json(medicine);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a new medicine 

const createMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.create(req.body);
        res.status(201).json(medicine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// updated an existing medicine
const updatedMedicine = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedMedicine = await Medicine.findByIdAndUpdate(id, req.body, {
             new: true,
              runValidators: true,
             });

        if (!updatedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json(updatedMedicine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//delete medicine with id
const deleteMedicine = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMedicine = await Medicine.findByIdAndDelete(id);

        if (!deletedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json({ message: "Medicine deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getMedicines,
    getMedicine,
    createMedicine,
    updatedMedicine,
    deleteMedicine
}