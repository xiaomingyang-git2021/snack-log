// const checkName = (req, res, next) => {
//   if (req.body.name) {
//     next();
//   } else {
//     res.status(422).json({success: false, payload: "Must include name field"});
//   }
// };

// const checkFavorite = (req, res, next) => {
//   if(typeof req.body.is_favorite === "boolean"){
//     next();
//   } else {
//     res.status(400).json({ error: "is_favorite must be a boolean" })
//   }
// };

function capitalization(str) {
  return str.toLowerCase().split(" ").map(el => {
    if(el.length > 2){
      return el[0].toUpperCase() + el.slice(1);
    } else {
      return el;
    }
  }).join(" ");
}

module.exports = { capitalization };