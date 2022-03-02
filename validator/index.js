//const { check, checkBody, body } = require('express-validator');
//const check = require('express-validator/check').check



exports.createPostValidator = (req,res,next) => {

    //title
    req.check("title", "write a title").notEmpty();
    req.check("title", "title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150    
    });

    //Body
    req.check("body", "write a body").notEmpty();
    req.check("body", "body must be between 10 to 500 characters").isLength({
        min: 10,
        max: 2000   
    });

    // check error
    const errors = req.validationErrors()

    //if errors show the first one as they happen
    if(errors) {
        const firstError = errors.map((error) => error.msg) 
        return res.status(400).json({error: firstError})

    }

    //proceed to next middleware
    next();
};