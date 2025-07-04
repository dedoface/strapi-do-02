export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          },
          endpoint: env('DO_SPACE_ENDPOINT'),
          region: env('DO_SPACE_REGION', 'us-east-1'),
          bucket: env('DO_SPACE_BUCKET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });