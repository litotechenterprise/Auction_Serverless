async function CreateAuction(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'CreateAuction from GreenLinks' }),
  };
}

export const handler = CreateAuction;


