export default {
  port: 3000,
  dbUri: "mongodb://127.0.0.1:27017/test",
  logLevel: "info",
  accessTokenPrivateKey:
    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWFFJQkFBS0JnUURUaW13MmgyOEJ3WWovMjFLcTExTUZmRnRMWU9TVHpCREtmejVORjZ1R2hlRWJWU3NwCllDVkJtMDA0SDc2TjF0NVRIM0Q4My9Pc3VUTXNicGFlbWkxSTRoTWlTcmZRNzE4T3ZrQ3NYR0VKU29yclNZTjQKL1ZBQWZDSjJiQnZCNkJ1UDcwMXJGTmtGc0JIRVExejJwbnBEQUVlMzdlWW8zOU9OaWRPeXEwYy9id0lEQVFBQgpBb0dBUUdEckovazFybG9oQUlUVjlzcExLT3M4dVljR2FYaDhUN1JEMktCd2dpTXlhK2dTbDZmOERxaGQ2c3UyCmFXSlFEUW9QajlYMFNjZWZMRkdIbzBNV3JuN2c0QzBDTkVFSUlFZS9yUW00YnZtNzZKYnJmcU9MNDRYNHlCd2gKRXRXcU9DMysxMTBiSFYxa01FWERYSTE3Vkx4V2ZKRUJhMUJBaTdTZWdLTmJRbkVDUVFEeTNCeXdMMUR5VmxMaQpWdTM4c0dMSlNQSkNGckpBQ2NrUjIzTlNldSswQjBTTWk5ZmJaaklVMGxUQVZXWjVjUnA1clN2Qk03akgzU24vCjhGeHdlUUJwQWtFQTN2eUJUSVB3cDFQMUhuQmdOWDZPNHNUWm90Vm5DZklSUHFpOUwvamIzeXhQc2hkQ1NTUFYKQmxBUHhpTWQxQW1OckJSMVhDWTRrb1FEbDdqSTFuL0dGd0pCQU1Zc1F1U3AxNTNJUHg0ZTNWaEMvbmxOb3hHMgp2NEZ0K3JzdG5hOENUak5UY3VaVS9yRXpkVTUwUzJBZXo5M3RJek9DMFo5Myt5SnNJR2VPMVgrWjNYRUNRQW10Ck0zODZpb3I0WGI3QWFheG9uWkxCc0NBYzJxZlgxVisrdXRjR0dhU0pxN3V5dnJHbDJHeTV0TFdJZUpibkF6cmcKZUdkVFVVa3FhVzJBRzFjVG5Ha0NRUURUZDRGQUNxd0l2N25HWnlUMWZEb3p5Q0NLOCtnQVVKZjVCcDR3OEc5bAppVEtxeG9xNC9BcC9EUGxwenBvZ2oxcStVcjI3NjI3Y2laSmhLOG1XV1BlZgotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==",
  accessTokenPublicKey:
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FEVGltdzJoMjhCd1lqLzIxS3ExMU1GZkZ0TApZT1NUekJES2Z6NU5GNnVHaGVFYlZTc3BZQ1ZCbTAwNEg3Nk4xdDVUSDNEODMvT3N1VE1zYnBhZW1pMUk0aE1pClNyZlE3MThPdmtDc1hHRUpTb3JyU1lONC9WQUFmQ0oyYkJ2QjZCdVA3MDFyRk5rRnNCSEVRMXoycG5wREFFZTMKN2VZbzM5T05pZE95cTBjL2J3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==",
  refreshTokenPrivateKey:
    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWEFJQkFBS0JnUUNhWWlBSE1EUG03bXBDQTZrLzR5TmNFbWlSd1NmcjRWNmlITFEycjBaSFlnZVhVa2VDCjlpRy8vMVFucUgvRS9TRTA5R0JPUU10cnNzbkd4ZnJXdzFFenhoMTVraEY2dEZMVFlpS1E4eXI3dnFHSmI0d3QKRjg0eldwUkxxU2xwbTBSZmd0Znd5ckdMYmdEamt1cFJmTFloYnNhN0h6SVdVdkVlY3Q0NGNXL3Bod0lEQVFBQgpBb0dBT05YTkVyaGxNeXdzaERjUzFRbEsyRGVTdGE0VmcxcEoyNGFUdGRvYkZtWjVndlR3akw4T043L0kvSHlrCjVTR0hXeFpvYWdhaW5QaUtIaHArdVJmWXlaR042enlqRytsNEgzVWdoOXNrQnV2cnY3NjNCYURWZzFYOFk4eXUKb3Q1UTROUkdDM29RTlkxTXBtQWNUMjczMnQ1K2tFamxCT2R5cjZTYzgvSW5JbEVDUVFEb01QRlZTazBxQlhyUgpCTmlzdlVsRFJ3cisyUHdBcCtDODJFcFVKZ2QyU0dKb3IvQjRucnN3MTkwakFlWXAwM01KSGN3SHc0dlpzZmNCCm9Tb2VIWVB2QWtFQXFqYTJhSk1ZZTVzdmZhckpiNUVWSmsyVm5vbzExYmxHejl5RW92RmZHWW5MOXBkVVdCcUYKVUFqREV0Q0V3UlZRL1M4alhWek5ZT3ZPdHNpOHpjRjc2UUpBVWs0ZkRldXpwS1NpbjNzSFQxd2RuektNckQvQQpQSDlGdzhzcnRkNXhJTFdSNUtnUkpzQ2xmQy9ZbkhNczRrQ284MTlUbHFEemJ1eU5zVTh1dmRRYWt3SkFSWFVVCkZESktJRTVnSDhDc2VFbFV2dytUeVdFT3ZNcmhHWHNiNkwza0Y3RENPVHJoWVI1WlhpSmxMKzFFN3VGNjdnWHAKUVhUWUhmKzdsNXpzWm0zWTJRSkJBTm1Ia2NjdjZ0NmlIZzZVdlN4RTUxemFpcWJYUHlUYkRMdmFiUU5pYzNCVgo2MU5ZWm56a3hXY1lUR1U2K1NSZTJ3cTgrOUthdTlkMFZRb2hVL2JiWFVBPQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==",
  refreshTokenPublicKey:
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDYVlpQUhNRFBtN21wQ0E2ay80eU5jRW1pUgp3U2ZyNFY2aUhMUTJyMFpIWWdlWFVrZUM5aUcvLzFRbnFIL0UvU0UwOUdCT1FNdHJzc25HeGZyV3cxRXp4aDE1CmtoRjZ0RkxUWWlLUTh5cjd2cUdKYjR3dEY4NHpXcFJMcVNscG0wUmZndGZ3eXJHTGJnRGprdXBSZkxZaGJzYTcKSHpJV1V2RWVjdDQ0Y1cvcGh3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==",
  smtp: {
    user: "jkninfrc42ey5pwx@ethereal.email",
    pass: "xVPUGndjctXGG5KGxC",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
  },
};
