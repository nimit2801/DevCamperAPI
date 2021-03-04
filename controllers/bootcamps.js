// @desc    Get All BootCamps
// @route   GET /api/v1/bootacamps
// @access  Public

exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Show All Bootcamps"});
};

// @desc    Get Single BootCamp
// @route   GET /api/v1/bootacamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Show Bootcamp ${req.params.id}`});
};

// @desc    Create New BootCamp
// @route   POST /api/v1/bootacamps
// @access  Private

exports.createBootCamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Created new BootCamp`});
};

// @desc    Update BootCamp
// @route   PUT /api/v1/bootacamps/:id
// @access  Private

exports.updateBootCamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Update Bootcamp ${req.params.id}`});
};

// @desc    Delete BootCamp
// @route   DELETE /api/v1/bootacamps/:id
// @access  Private

exports.deleteBootCamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`});
};


