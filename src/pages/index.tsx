import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { AuthApi } from '../api/AuthApi'
import { LoginRequest } from '../types/Auth'
import { loginValidation } from '../validation/login'
import UserStore from '../store/UserStore'

const LoginPage = () => {
  const toast = useToast()
  const router = useRouter()
  const formik = useFormik({
    initialValues: {} as LoginRequest,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log('Отправка формы', values)
      AuthApi.login(values)
        .then((response) => {
          UserStore.setUser(response.data)
          router.push('/todos')
        })
        .catch((err) => {
          console.log('ошибка')
          toast({
            title: 'Неверный логин или пароль',
            status: 'error',
            isClosable: true,
          })
        })
    },
  })
  return (
    <Center h={'100vh'}>
      <Flex
        as='form'
        // @ts-ignore
        onSubmit={formik.handleSubmit}
        gap={4}
        flexDirection={'column'}
      >
        <FormControl
          isInvalid={formik.touched.email && Boolean(formik.errors.email)}
        >
          <FormLabel>Email</FormLabel>
          <Input
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.touched.password && Boolean(formik.errors.password)}
        >
          <Input
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button type='submit'>Логин</Button>
      </Flex>
    </Center>
  )
}
export default LoginPage
