import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

export interface UserNavbarProps {
    name: string
    email: string
    imageUri: string
}

const NavbarUser = ({ name, email, imageUri }: UserNavbarProps) => {
    const theme = useMantineTheme();

    return (
        <Box
            sx={{
                paddingTop: theme.spacing.sm,
                borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                    }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                        src={imageUri}
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            {name}
                        </Text>
                        <Text color="dimmed" size="xs">
                            {email}
                        </Text>
                    </Box>

                    {theme.dir === 'ltr' ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
                </Group>
            </UnstyledButton>
        </Box>
    );
}

export default NavbarUser;