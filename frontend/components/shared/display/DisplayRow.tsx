import React from 'react';
interface Props {
  label: any;
  value: any;
}
function DisplayRow({ label, value }: Props) {
  return (
    <div className="flex items-center w-full">
      <div className="displayLabel">{label} </div>
      <div className="displayValue">{value || 'N/A'}</div>
    </div>
  );
}

export default DisplayRow;
