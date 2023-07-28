import styled from "styled-components";
import "./App.css";
import { colors, AppThemeProvider } from "./theme";
import { Button, Select } from "antd";
import JsonEditor from "react-json-editor-ui";
import { useState } from "react";

function App() {
  const [editObject, setEditObject] = useState<any>({
    name: "may",
    age: null,
    address: [
      "Panyu Shiqiao on Canton",
      "Tianhe",
      {
        city: "forida meta 11",
      },
    ],
    others: {
      id: 1246,
      joinTime: "2017-08-20. 10:20",
      description: "another",
    },
  });

  return (
    // The primary color should be purple
    <AppThemeProvider colors={colors}>
      <StyledContainer>
        <Button type="primary">Primary Button</Button>
        <Select defaultValue={1}>
          {[1, 2, 3, 4].map((value) => (
            <Select.Option value={value}>{value}</Select.Option>
          ))}
        </Select>
      </StyledContainer>

      {/* Comment out the JsonEditor below to see how the color should be */}
      <StyledContainer>
        <JsonEditor
          data={editObject}
          onChange={(data) => {
            setEditObject(data);
          }}
          optionsMap={{
            color: [
              { value: "red", label: "Red" },
              { value: "blue", label: "Blue" },
            ],
            city: [
              { value: "beijing", label: "Beijing" },
              { value: "shanghai", label: "Shanghai" },
            ],
          }}
        />
      </StyledContainer>
    </AppThemeProvider>
  );
}

const StyledContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default App;
