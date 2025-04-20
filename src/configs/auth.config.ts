import { registerAs } from '@nestjs/config';
import ms from 'ms';

export default registerAs('auth', (): Record<string, any> => {
  return {
    password: {
      saltLength: 8,
      expiredIn: 3 * 24 * 3600, // 3 day
      expiredTemporary: 1 * 24 * 3600, //1 day
    },
    jwt: {
      accessToken: {},
      refreshToken: {
        secretKey: '',
        expirationTime:
          ms(process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED as ms.StringValue) /
          1000,
      },
    },
  };
});
