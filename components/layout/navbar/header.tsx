import React from 'react'
import { Group, ActionIcon, useMantineColorScheme, Box, Text } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import Image from 'next/image';
import logo from '/public/ninja-emoji.svg'

const NavbarHeader = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Box
            sx={(theme) => ({
                paddingLeft: theme.spacing.xs,
                paddingRight: theme.spacing.xs,
                paddingBottom: theme.spacing.lg,
                borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                    }`,
            })}
        >
            <Group position="apart">
                    <Image src={logo} />
                    <Text>Trading Card Ninja</Text>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                    {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
                </ActionIcon>
            </Group>
        </Box>
    );
}

export default NavbarHeader