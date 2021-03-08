const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// @desc    Get All BootCamps
// @route   GET /api/v1/bootacamps
// @access  Public

exports.getBootcamps = asyncHandler (async (req, res, next) =>{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});    
        next(err);
});

// @desc    Get Single BootCamp
// @route   GET /api/v1/bootacamps/:id
// @access  Public

exports.getBootcamp = asyncHandler (async (req, res, next) =>{
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            // formated objectid but not found in the database
            return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}`, 404)); 
        }

        res.status(200).json({success: true, data: bootcamp});    
        next(err);
});

// @desc    Create New BootCamp
// @route   POST /api/v1/bootacamps
// @access  Private

exports.createBootCamp = asyncHandler (async (req, res, next) =>{
    
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201)
            .json({
                success: true,
                data: bootcamp
        });    
        next(err); 
});

// @desc    Update BootCamp
// @route   PUT /api/v1/bootacamps/:id
// @access  Private

exports.updateBootCamp = asyncHandler (async (req, res, next) =>{
    
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body , {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp) {
            next(err); 
        }
    
        res.status(200).json({success: true, data: bootcamp});
        next(err);;

});

// @desc    Delete BootCamp
// @route   DELETE /api/v1/bootacamps/:id
// @access  Private

exports.deleteBootCamp = asyncHandler (async (req, res, next) =>{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp) {
            next(err); 
        }
    
        res.status(200).json({success: true, data: {}});
        next(err);
    //res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`});
});
