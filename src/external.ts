import * as amqp from "amqplib/callback_api";


export const RabbitConnections = (result) => {
  amqp.connect(process.env.RABBIT_URI, (error0: any, connection: any) => {
    if (error0) throw error0;
    connection.createChannel((err: any, channel: any) => {
      if (err) throw err;
      process.on('beforeExit', () =>{
        console.log('closing')
        connection.close()
      })
      return channel.sendToQueue('hello', Buffer.from(JSON.stringify(result)))
    
    });
  });
};
