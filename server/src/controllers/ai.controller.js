const aiService = require("../serivces/ai.cervice");

class AiController {
  static async askAi(req, res) {
    const { question } = req.body;
    console.log(req.body)
    const answer = await aiService.ask(question);
    

    res.json({ answer })
  }
}

module.exports = AiController