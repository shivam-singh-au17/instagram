const express = require("express");
const router = express.Router();
const { Details, Education, Experience, Skills } = require("../models/resumeApp");
const resumeService = require("./service");


router.post("/details/", resumeService(Details).create);
router.get("/details/", resumeService(Details).get);
router.get("/details/:id", resumeService(Details).getOne);
router.put("/details/:id", resumeService(Details).update);
router.delete("/details/:id", resumeService(Details, "details").deleteOne);


router.post("/education/", resumeService(Education).create);
router.get("/education/", resumeService(Education).get);
router.get("/education/:id", resumeService(Education).getOne);
router.put("/education/:id", resumeService(Education).update);
router.delete("/education/:id", resumeService(Education, "education").deleteOne);


router.post("/experience/", resumeService(Experience).create);
router.get("/experience/", resumeService(Experience).get);
router.get("/experience/:id", resumeService(Experience).getOne);
router.put("/experience/:id", resumeService(Experience).update);
router.delete("/experience/:id", resumeService(Experience, "experience").deleteOne);


router.post("/skills/", resumeService(Skills).create);
router.get("/skills/", resumeService(Skills).get);
router.get("/skills/:id", resumeService(Skills).getOne);
router.put("/skills/:id", resumeService(Skills).update);
router.delete("/skills/:id", resumeService(Skills, "skills").deleteOne);


module.exports = router;

