import React from 'react';
import ReactJson from 'react-json-view';
import { JsonWrapper } from './styles';

const JsonComponent = ({ responseBody }) => (
  <JsonWrapper>
    {responseBody != null && responseBody.jsonObject != null ? (
      <ReactJson enableClipboard={false} src={responseBody.jsonObject} />
    ) : (
      <></>
    )}
  </JsonWrapper>
);

export default JsonComponent;
