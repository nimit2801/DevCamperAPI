const Bootcamp = require('../models/Bootcamp');

// @desc    Get All BootCamps
// @route   GET /api/v1/bootacamps
// @access  Public

exports.getBootcamps = async (req, res, next) =>{
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true, data: bootcamps});    
    } catch (error) {
        res.status(400)
            .json({success: false});
    }
};

// @desc    Get Single BootCamp
// @route   GET /api/v1/bootacamps/:id
// @access  Public

exports.getBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        
        if(!bootcamp) {
             return res.status(400)
                .json({success: false});    
        }

        res.status(200).json({success: true, data: bootcamp});    
    } catch (error) {
        res.status(400)
            .json({success: false});
    }
    
};

// @desc    Create New BootCamp
// @route   POST /api/v1/bootacamps
// @access  Private

exports.createBootCamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201)
            .json({
                success: true,
                data: bootcamp
        });    
    } catch (err) {
        res.status(400)
            .json({
                success: false,
        }); 
    }    
};

// @desc    Update BootCamp
// @route   PUT /api/v1/bootacamps/:id
// @access  Private

exports.updateBootCamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body , {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp) {
            res.status(400)
                .json({
                    success: false,
            }); 
        }
    
        res.status(200).json({success: true, data: bootcamp});

    } catch (err) {
        res.status(400)
        .json({
            success: false,
            reason: err
        });
    }

};

// @desc    Delete BootCamp
// @route   DELETE /api/v1/bootacamps/:id
// @access  Private

exports.deleteBootCamp = async (req, res, next) =>{
    res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`});
};


