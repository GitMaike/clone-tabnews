function status(request, response) {
  response.status(200).json({ chave: "teste com acentuação" });
}

export default status;
