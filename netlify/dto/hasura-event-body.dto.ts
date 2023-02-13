import { Orders } from "../common/sdk";

export enum HasuraEvents {
  ORDER_CREATED = 'order_created',
}

export interface HasuraEventBody {
  created_at: string;
  delivery_info: DeliveryInfo;
  event: Event;
  id: string;
  table: Table;
  trigger: Trigger;
}

interface Trigger {
  name: HasuraEvents;
}

interface Table {
  name: string;
  schema: string;
}

interface Event {
  data: Data;
  op: string;
  session_variables: Sessionvariables;
  trace_context: Tracecontext;
}

interface Tracecontext {
  span_id: string;
  trace_id: string;
}

interface Sessionvariables {
  "x-hasura-role": string;
}

interface Data {
  new: Pick<Orders, 'client_adress'| 'client_name' | 'client_phone' | 'client_surname' | 'status' | 'id'>;
  old?: any;
}


interface DeliveryInfo {
  current_retry: number;
  max_retries: number;
}
