const options1xx = [
  { value: 100, label: '100 Continue' },
  { value: 101, label: '101 Switching Protocols' },
  { value: 102, label: '102 Processing' },
];

const options2xx = [
  { value: 200, label: '200 OK' },
  { value: 201, label: '201 Created' },
  { value: 202, label: '202 Accepted' },
  { value: 203, label: '203 Non-authoritative Information' },
  { value: 204, label: '204 No Content' },
  { value: 205, label: '205 Reset Content' },
  { value: 206, label: '206 Partial Content' },
  { value: 207, label: '207 Multi-Status' },
  { value: 208, label: '208 Already Reported' },
  { value: 226, label: '226 IM Used' },
];

const options3xx = [
  { value: 300, label: '300 Multiple Choices' },
  { value: 301, label: '301 Moved Permanently' },
  { value: 302, label: '302 Found' },
  { value: 303, label: '303 See Other' },
  { value: 304, label: '304 Not Modified' },
  { value: 305, label: '305 Use Proxy' },
  { value: 307, label: '307 Temporary Redirect' },
  { value: 308, label: '308 Permanent Redirect' },
];

const options4xx = [
  { value: 400, label: '400 Bad Request' },
  { value: 401, label: '401 Unauthorized' },
  { value: 402, label: '402 Payment Required' },
  { value: 403, label: '403 Forbidden' },
  { value: 404, label: '404 Not Found' },
  { value: 405, label: '405 Method Not Allowed' },
  { value: 406, label: '406 Not Acceptable' },
  { value: 407, label: '407 Proxy Authentication Required' },
  { value: 408, label: '408 Request Timeout' },
  { value: 409, label: '409 Conflict' },
  { value: 410, label: '410 Gone' },
  { value: 411, label: '411 Length Required' },
  { value: 412, label: '412 Precondition Failed' },
  { value: 413, label: '413 Payload Too Large' },
  { value: 414, label: '414 Request-URI Too Long' },
  { value: 415, label: '415 Unsupported Media Type' },
  { value: 416, label: '416 Requested Range Not Satisfiable' },
  { value: 417, label: '417 Expectation Failed' },
  { value: 418, label: "418 I'm a teapot" },
  { value: 421, label: '421 Misdirected Request' },
  { value: 422, label: '422 Unprocessable Entity' },
  { value: 423, label: '423 Locked' },
  { value: 424, label: '424 Failed Dependency' },
  { value: 426, label: '426 Upgrade Required' },
  { value: 428, label: '428 Precondition Required' },
  { value: 429, label: '429 Too Many Requests' },
  { value: 431, label: '431 Request Header Fields Too Large' },
  { value: 444, label: '444 Connection Closed Without Response' },
  { value: 451, label: '451 Unavailable For Legal Reasons' },
  { value: 499, label: '499 Client Closed Request' },
];

const options5xx = [
  { value: 500, label: '500 Internal Server Error' },
  { value: 501, label: '501 Not Implemented' },
  { value: 502, label: '502 Bad Gateway' },
  { value: 503, label: '503 Service Unavailable' },
  { value: 504, label: '504 Gateway Timeout' },
  { value: 505, label: '505 HTTP Version Not Supported' },
  { value: 506, label: '506 Variant Also Negotiates' },
  { value: 507, label: '507 Insufficient Storage' },
  { value: 508, label: '508 Loop Detected' },
  { value: 510, label: '510 Not Extended' },
  { value: 511, label: '511 Network Authentication Required' },
  { value: 599, label: '599 Network Connect Timeout Error' },
];

export const httpStatusGrouped = [
  {
    label: '1×× Informational',
    options: options1xx,
  },
  {
    label: '2×× Success',
    options: options2xx,
  },
  {
    label: '3×× Redirection',
    options: options3xx,
  },
  {
    label: '4×× Client Error',
    options: options4xx,
  },
  {
    label: '5×× Server Error',
    options: options5xx,
  },
];

export const httpStatus = [
  ...options1xx,
  ...options2xx,
  ...options3xx,
  ...options4xx,
  ...options5xx,
];
