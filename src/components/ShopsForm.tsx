import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import FormWrapper from './FormWrapper'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'
import { useFormContext } from 'react-hook-form'
import { useAppDispatch } from '../hooks/redux'
import { resetProductsState } from '../redux/reducers/orderProductsReducer'
import HowToButton from './HowToButton'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ChosenShop } from '../types/ChosenShop'
import { SHOPS } from '../constants/shops'
import { COLORS } from '../constants/materialui'

interface ShopsFormProps {
  shopIsChosen: boolean
  setShopIsChosen: Dispatch<SetStateAction<boolean>>
  chosenShop: ChosenShop
  setChosenShop: Dispatch<SetStateAction<ChosenShop>>
}

const ShopsForm = ({
  shopIsChosen,
  setShopIsChosen,
  setChosenShop,
  chosenShop,
}: ShopsFormProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  const { reset: resetForm } = useFormContext()
  const dispatch = useAppDispatch()

  const resetAppForm = () => {
    resetForm()
    dispatch(resetProductsState())
  }

  const switchShopHandler = (event: ChangeEvent<HTMLInputElement>) => {
    resetAppForm()
    setShopIsChosen(true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setChosenShop(event.target.value)
  }

  return (
    <FormWrapper title="">
      <Stack spacing={3} alignItems="center" justifyContent="space-around">
        <HowToButton />
        <Stack
          direction={isDesktopMedia ? 'row' : 'column'}
          alignItems="center"
          spacing={2}
        >
          <FormControl sx={{ gap: 2 }}>
            <FormLabel sx={{ alignSelf: 'center' }}>
              <Typography textAlign="center">
                Прочитайте инструкцию и выберите поставщика
              </Typography>
            </FormLabel>
            <RadioGroup
              row={isDesktopMedia}
              onChange={switchShopHandler}
              sx={{
                gap: 3,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                control={<Radio />}
                label={
                  <Stack justifyItems="space-between">
                    <Paper
                      elevation={0}
                      sx={{
                        width: 260,
                        height: 60,
                        backgroundImage: `url(${'technodom_logo.png'})`,
                        backgroundSize: '77%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <Typography
                      textAlign="center"
                      color={
                        chosenShop === 'technodom'
                          ? COLORS.PRIMARY
                          : COLORS.GRAY
                      }
                    >
                      бытовая и компьютерная техника
                    </Typography>
                  </Stack>
                }
                value="technodom"
              />
              <FormControlLabel
                control={<Radio />}
                label={
                  <Stack>
                    <Paper
                      elevation={0}
                      sx={{
                        width: 260,
                        height: 60,
                        backgroundImage: `url(${'mechta_logo.png'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <Typography
                      textAlign="center"
                      color={
                        chosenShop === 'mechta' ? COLORS.PRIMARY : COLORS.GRAY
                      }
                    >
                      электроника и бытовая техника
                    </Typography>
                  </Stack>
                }
                value="mechta"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button variant="outlined" sx={{}} disabled={!shopIsChosen}>
          {shopIsChosen ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Link href={SHOPS.SHOP_URLS[chosenShop]} target="_blank">
              Перейти на сайт поставщика
            </Link>
          ) : (
            'Перейти на сайт поставщика'
          )}
        </Button>
      </Stack>
    </FormWrapper>
  )
}

export default ShopsForm
