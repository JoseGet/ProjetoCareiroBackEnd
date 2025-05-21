import { MercadoPagoConfig, Payment } from 'mercadopago';

const mercadoPago = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_TOKEN!,
});

const payment = new Payment(mercadoPago);

export { mercadoPago, payment };
