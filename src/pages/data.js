import React, { useState } from "react";
import { format, formatDistance } from "date-fns";
import  pt  from 'date-fns/locale/pt'

function FomartDate() {
  const consumeFormatDay = format(new Date(), "EEEE d MMMM u", {
    locale:pt
  });
    return <div>{consumeFormatDay}</div>;
}

export default FomartDate;


