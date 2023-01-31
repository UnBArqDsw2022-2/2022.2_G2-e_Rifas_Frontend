import React from "react";
import Box from "@mui/material/Box";
import Select from 'react-select'


type props = {
    inputName: string;
    options: any[];
};

const CustomSelect = ({ inputName, options }: props) => {
  return (
    <>
        <p
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: "bold",
            color: "var(--p6-color)",
            fontSize: "24px",
          }}
        >
          {inputName}
        </p>
        <Box width={"520px"}>
            <Select
                isClearable={true}
                isSearchable={true}
                placeholder="Selecione uma opção"
                options={options}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        height: "55.97px",
                        backgroundColor: "rgb(162 198 217)",
                        borderRadius: "8px",
                        borderWidth: "2px",
                        ':hover': {
                            borderColor: 'black',
                        },
                    }),
                    indicatorSeparator: (provided) => ({
                        ...provided,
                        backgroundColor: 'gray',
                    }),
                    dropdownIndicator: (provided) => ({
                        ...provided,
                        color: 'gray',
                    }),
                    clearIndicator: (provided) => ({
                        ...provided,
                        color: 'gray',
                    }),
                }}
            />
        </Box>
    </>
  );
};

export default CustomSelect;