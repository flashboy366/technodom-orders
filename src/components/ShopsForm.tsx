import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material'
import FormWrapper from './FormWrapper'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'
import Image from 'mui-image'
import { useFormContext } from 'react-hook-form'
import { useAppDispatch } from '../hooks/redux'
import { resetProductsState } from '../redux/reducers/orderProductsReducer'
import HowToButton from './HowToButton'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ChosenShop } from '../types/ChosenShop'
import { SHOPS } from '../constants/shops'

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
  const [iseDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

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
  console.log(shopIsChosen)

  return (
    <FormWrapper title="">
      <Stack spacing={3} alignItems="center" justifyContent="space-around">
        <HowToButton />
        <Stack
          direction={iseDesktopMedia ? 'row' : 'column'}
          alignItems="center"
          spacing={2}
        >
          <FormControl sx={{ gap: 2 }}>
            <FormLabel sx={{ alignSelf: 'center' }}>
              Выберите поставщика
            </FormLabel>
            <RadioGroup
              row
              onChange={switchShopHandler}
              sx={{ gap: 3, justifyContent: 'space-between' }}
            >
              <FormControlLabel
                control={<Radio />}
                label={
                  <Image
                    src="technodom_logo.png"
                    width={245}
                    height={60}
                    fit="none"
                    bgColor="white"
                  />
                }
                value="technodom"
              />
              {/*<FormControlLabel*/}
              {/*  control={<Radio />}*/}
              {/*  label={*/}
              {/*    <Image*/}
              {/*      src={'miele_logo.png'}*/}
              {/*      height={60}*/}
              {/*      width={200}*/}
              {/*      fit="none"*/}
              {/*    />*/}
              {/*  }*/}
              {/*  value="miele"*/}
              {/*/>*/}
              <FormControlLabel
                control={<Radio />}
                label={
                  <Box
                    width={280}
                    justifyContent="center"
                    position="relative"
                    left={-30}
                    top={-4}
                  >
                    <Image src={'mechta_logo.png'} height={60} fit="cover" />
                  </Box>
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
