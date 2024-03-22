import type { StringInputProps } from 'sanity';
import { set, unset } from 'sanity';
import { Stack, Flex, TextInput, Text, Avatar, Card, Grid } from '@sanity/ui';
import React, { useCallback } from 'react';

type ColorList = {
  title: string;
  value: string;
};

type SchemaTypeOption = { list: ColorList[] } | undefined;

const ColorSelector = ({
  schemaType,
  value = '',
  onChange,
}: StringInputProps) => {
  const schemeTypeOptions = schemaType.options as SchemaTypeOption;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(
        event.currentTarget.value ? set(event.currentTarget.value) : unset(),
      ),
    [onChange],
  );

  const handleSelect = useCallback(
    (hex: string) => onChange(hex ? set(hex) : unset()),
    [onChange],
  );

  return (
    <Stack space={3}>
      <Grid columns={2} gap={1}>
        <Avatar size={1} style={{ backgroundColor: value, width: '100%' }} />
        <TextInput
          fontSize={1}
          padding={3}
          placeholder='Enter hex (#ffffff) or select color below'
          onChange={handleChange}
          value={value}
        />
      </Grid>
      <Card borderTop paddingTop={3}>
        <Flex direction={'row'} wrap={'wrap'}>
          {schemeTypeOptions.list.map(({ title, value }) => {
            return (
              <ColorCircle
                key={value}
                colorName={title}
                hex={value}
                onClickHandler={handleSelect}
              />
            );
          })}
        </Flex>
      </Card>
    </Stack>
  );
};

export default ColorSelector;

type ColorCircle = {
  colorName: string;
  hex: string;
  onClickHandler: (hex: string) => void;
};

const ColorCircle = ({ colorName, hex, onClickHandler }: ColorCircle) => {
  return (
    <Card paddingRight={2} paddingBottom={4}>
      <Avatar
        size={2}
        style={{
          backgroundColor: hex,
          cursor: 'pointer',
        }}
        onClick={() => onClickHandler(hex)}
      />
      <Text size={1} align={'center'} style={{ marginTop: '1em' }}>
        {colorName}
      </Text>
    </Card>
  );
}
