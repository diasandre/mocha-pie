import { toast } from 'react-toastify';

export const isValidJson = (value, showToast) => {
  if (value == null) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch (e) {
    if (showToast) toast.error('JSON is not valid 😵');
    return null;
  }
};
