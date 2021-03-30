export enum OrderStatus {
  // When the order has been created but the
  // ticket it is trying to order has not been reserved
  Created = "created",

  // Anytime the ticket the order is trying to reserve is
  // already reserved or when the user has cancelled or
  // the order has been expired
  Cancelled = "cancelled",

  // Whenever the order reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // When user provides payment aswell
  Complete = "complete",
}
