interface PayPalHostedButtons {
  hostedButtonId: string;
}

interface PayPalHostedButtonsAPI {
  render: (selector: string) => void;
}

interface PayPal {
  HostedButtons: (config: PayPalHostedButtons) => PayPalHostedButtonsAPI;
}

interface Window {
  paypal?: PayPal;
}
