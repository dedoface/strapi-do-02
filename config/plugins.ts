export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_SECRET_KEY'),
            region: env('DO_SPACE_REGION'),
            endpoint: env('DO_SPACE_ENDPOINT'),
            credentials: {
              accessKeyId: env('DO_SPACE_ACCESS_KEY'),
              secretAccessKey: env('DO_SPACE_SECRET_KEY'),
            },
            params: {
              ACL: env('DO_SPACE_ACL', 'public-read'),
              Bucket: env('DO_SPACE_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });