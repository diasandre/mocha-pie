import ReactJson from "react-json-view";
import { JsonWrapper } from "./styles";

const JsonComponent = ({ responseBody }) => {
  return (
    <JsonWrapper>
      {responseBody != null && responseBody.jsonObject != null ? (
        <ReactJson enableClipboard={false} src={responseBody.jsonObject} />
      ) : (
        <></>
      )}
    </JsonWrapper>
  );
};

export default JsonComponent;
