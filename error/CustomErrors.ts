export class PropertyRequiredError extends Error {
  public httpCode = 400;

  constructor(message: string) {
    super(message);
    this.name = 'PropertyRequiredError';
  }
}
