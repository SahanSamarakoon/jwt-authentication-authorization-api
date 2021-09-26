exports.admin = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.manager = (req, res) => {
    res.status(200).send("Manager Content.");
};

exports.salesperson = (req, res) => {
    res.status(200).send("Salesperson Content.");
};