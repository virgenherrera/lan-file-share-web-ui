import { AlertColor } from '@mui/material';

export class ApiException extends Error {
  severity: AlertColor;
  title = 'API Exception';

  constructor(private response: Response) {
    super(response.statusText);

    this.severity = this.response.status >= 500 ? 'error' : 'warning';
  }

  get headers() {
    return this.response.headers;
  }

  get status() {
    return this.response.status;
  }

  get statusText() {
    return this.response.statusText;
  }

  async responseBody() {
    return await this.response.json();
  }
}
