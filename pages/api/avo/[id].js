import DB from "../../../database/db";
const itemAvo = async (request, response) => {
  const db = new DB();

  const id = request.query.id 

  const item = await db.getById(id);

  //normal
//   response.statusCode = 200;
//   response.setHeader('Content-type', 'application/json');
//   response.end(JSON.stringify({ item}));
    //next js

    response.status(200).json(item)

};

export default itemAvo;
