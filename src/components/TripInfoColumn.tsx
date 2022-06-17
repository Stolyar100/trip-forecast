import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TripListColumn from './TripListColumn';
import TripListColumnCard from './TripListColumnCard';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TripInfoField from './TripInfoField';
import { styled } from '@mui/material/styles';

interface TripListHeaderProps {
  addDayClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const TripListHeader = ({ addDayClickHandler }: TripListHeaderProps) => {
  return (
    <TripListColumn>
      <Stack spacing={0.5}>
        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            minHeight: '200px',
            backgroundColor: (theme) => theme.palette.common.white,
          }}
        >
          <Button
            size={'large'}
            sx={{ margin: 'auto' }}
            onClick={addDayClickHandler}
          >
            Додати день
          </Button>
        </Paper>

        <TripListColumnCard maxHeight>
          <Stack spacing={0.85} divider={<Divider sx={{ width: '100%' }} />}>
            <Stack
              spacing={0.75}
              component={'ul'}
              divider={<Divider sx={{ width: '100%' }} />}
              sx={{
                width: '100%',
                p: 0,
                m: 0,
                alignItems: 'center',
                marginTop: '0.86rem',
              }}
            >
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Частина доби
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Температура, &deg;С
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {' '}
                  Відчувається як, &deg;С{' '}
                </Typography>
              </TripInfoField>
            </Stack>
            <Stack
              component={'ul'}
              spacing={1}
              divider={<Divider sx={{ width: '100%' }} />}
              sx={{
                width: '100%',
                p: 0,
                m: 0,
                alignItems: 'center',
                paddingTop: '0.07rem',
              }}
            >
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {' '}
                  Тиск
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Вологість
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Швидкість вітру
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {' '}
                  Імовірність опадів
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Дощ
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Сніг
                </Typography>
              </TripInfoField>
              <TripInfoField>
                <Typography
                  variant={'body2'}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Індекс УФ
                </Typography>
              </TripInfoField>
            </Stack>
          </Stack>
        </TripListColumnCard>
      </Stack>
    </TripListColumn>
  );
};

export default TripListHeader;
