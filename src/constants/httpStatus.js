const options1xx = [
  { value: 100, label: "100 Continue" },
  { value: 101, label: "101 Switching Protocols" },
  { value: 102, label: "102 Processing" },
];

const options2xx = [
  { value: 200, label: "200 OK" },
  { value: 201, label: "201 Created" },
  { value: 202, label: "202 Accepted" },
  { value: 203, label: "203 Non-authoritative Information" },
  { value: 204, label: "204 No Content" },
  { value: 205, label: "205 Reset Content" },
  { value: 206, label: "206 Partial Content" },
  { value: 207, label: "207 Multi-Status" },
  { value: 208, label: "208 Already Reported" },
  { value: 226, label: "226 IM Used" },
];

export const httpStatusGrouped = [
  {
    label: "1×× Informational",
    options: options1xx,
  },
  {
    label: "2×× Success",
    options: options2xx,
  },
];

export const httpStatus = [...options1xx, ...options2xx];
