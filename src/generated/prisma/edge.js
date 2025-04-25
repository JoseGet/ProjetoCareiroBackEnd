
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AssociacaoScalarFieldEnum = {
  id_associacao: 'id_associacao',
  nome: 'nome',
  descricao: 'descricao'
};

exports.Prisma.Atende_umScalarFieldEnum = {
  id_pedido: 'id_pedido',
  id_vendedor: 'id_vendedor'
};

exports.Prisma.ClienteScalarFieldEnum = {
  cpf: 'cpf',
  nome: 'nome',
  email: 'email',
  telefone: 'telefone'
};

exports.Prisma.FeiraScalarFieldEnum = {
  id_feira: 'id_feira',
  nome: 'nome',
  endereco: 'endereco'
};

exports.Prisma.PedidoScalarFieldEnum = {
  pedido_id: 'pedido_id',
  data_pedido: 'data_pedido',
  endereco_entrega: 'endereco_entrega',
  fk_feira: 'fk_feira',
  fk_cliente: 'fk_cliente'
};

exports.Prisma.ProdutoScalarFieldEnum = {
  id_produto: 'id_produto',
  nome: 'nome',
  categoria: 'categoria',
  qntd: 'qntd',
  data_coleta: 'data_coleta',
  preco: 'preco',
  id_pedido: 'id_pedido',
  fk_vendedor: 'fk_vendedor'
};

exports.Prisma.VendedorScalarFieldEnum = {
  nome: 'nome',
  telefone: 'telefone',
  endereco_venda: 'endereco_venda',
  tipo_vendedor: 'tipo_vendedor',
  tipo_documento: 'tipo_documento',
  numero_documento: 'numero_documento',
  id_vendedor: 'id_vendedor',
  fk_associacao: 'fk_associacao'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.tipo_documento = exports.$Enums.tipo_documento = {
  CPF: 'CPF',
  CNPJ: 'CNPJ'
};

exports.tipo_vendedor = exports.$Enums.tipo_vendedor = {
  PF: 'PF',
  PJ: 'PJ'
};

exports.Prisma.ModelName = {
  associacao: 'associacao',
  atende_um: 'atende_um',
  cliente: 'cliente',
  feira: 'feira',
  pedido: 'pedido',
  produto: 'produto',
  vendedor: 'vendedor'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\alexa\\OneDrive\\Documentos\\Projeto - careiro\\ProjetoCareiroBackEnd\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\alexa\\OneDrive\\Documentos\\Projeto - careiro\\ProjetoCareiroBackEnd\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel associacao {\n  id_associacao String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  nome          String     @db.VarChar(30)\n  descricao     String     @db.VarChar(100)\n  vendedor      vendedor[]\n}\n\nmodel atende_um {\n  id_pedido   Int\n  id_vendedor String   @db.Uuid\n  pedido      pedido   @relation(fields: [id_pedido], references: [pedido_id], onDelete: NoAction, onUpdate: NoAction)\n  vendedor    vendedor @relation(fields: [id_vendedor], references: [id_vendedor], onDelete: NoAction, onUpdate: NoAction)\n\n  @@id([id_pedido, id_vendedor])\n}\n\nmodel cliente {\n  cpf      String   @id @db.VarChar(11)\n  nome     String   @db.VarChar(50)\n  email    String   @db.VarChar(30)\n  telefone String   @db.VarChar(10)\n  pedido   pedido[]\n}\n\nmodel feira {\n  id_feira Int      @id @default(autoincrement())\n  nome     String   @db.VarChar(80)\n  endereco String   @db.VarChar(120)\n  pedido   pedido[]\n}\n\nmodel pedido {\n  pedido_id        Int         @id @default(autoincrement())\n  data_pedido      DateTime    @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  endereco_entrega String      @db.VarChar(100)\n  fk_feira         Int?\n  fk_cliente       String?     @db.VarChar(11)\n  atende_um        atende_um[]\n  cliente          cliente?    @relation(fields: [fk_cliente], references: [cpf], onDelete: NoAction, onUpdate: NoAction, map: \"fk_cliente\")\n  feira            feira?      @relation(fields: [fk_feira], references: [id_feira], onDelete: NoAction, onUpdate: NoAction, map: \"fk_feira\")\n  produto          produto[]\n}\n\nmodel produto {\n  id_produto  String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  nome        String    @db.VarChar(80)\n  categoria   String    @db.VarChar(80)\n  qntd        Int\n  data_coleta DateTime  @db.Date\n  preco       Float\n  id_pedido   Int?\n  fk_vendedor String?   @db.Uuid\n  vendedor    vendedor? @relation(fields: [fk_vendedor], references: [id_vendedor], onDelete: NoAction, onUpdate: NoAction, map: \"fk_vendedor\")\n  pedido      pedido?   @relation(fields: [id_pedido], references: [pedido_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel vendedor {\n  nome             String         @db.VarChar(100)\n  telefone         String         @db.VarChar(15)\n  endereco_venda   String         @db.VarChar(100)\n  tipo_vendedor    tipo_vendedor\n  tipo_documento   tipo_documento\n  numero_documento String?        @db.VarChar(20)\n  id_vendedor      String         @id @db.Uuid\n  fk_associacao    String?        @db.Uuid\n  atende_um        atende_um[]\n  produto          produto[]\n  associacao       associacao?    @relation(fields: [fk_associacao], references: [id_associacao], onDelete: NoAction, onUpdate: NoAction, map: \"fk_associacao\")\n}\n\nenum tipo_documento {\n  CPF\n  CNPJ\n}\n\nenum tipo_vendedor {\n  PF\n  PJ\n}\n",
  "inlineSchemaHash": "66cc567bb3e45ba14c00f2df13aab497de44e3abb4ae09cd5067e90d13af6464",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"associacao\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_associacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendedor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vendedor\",\"nativeType\":null,\"relationName\":\"associacaoTovendedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"atende_um\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_vendedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"atende_umTopedido\",\"relationFromFields\":[\"id_pedido\"],\"relationToFields\":[\"pedido_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vendedor\",\"nativeType\":null,\"relationName\":\"atende_umTovendedor\",\"relationFromFields\":[\"id_vendedor\"],\"relationToFields\":[\"id_vendedor\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_pedido\",\"id_vendedor\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cliente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"cpf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"clienteTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"feira\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_feira\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"80\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"feiraTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pedido_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco_entrega\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_feira\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"atende_um\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"atende_um\",\"nativeType\":null,\"relationName\":\"atende_umTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cliente\",\"nativeType\":null,\"relationName\":\"clienteTopedido\",\"relationFromFields\":[\"fk_cliente\"],\"relationToFields\":[\"cpf\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feira\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"feira\",\"nativeType\":null,\"relationName\":\"feiraTopedido\",\"relationFromFields\":[\"fk_feira\"],\"relationToFields\":[\"id_feira\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"produto\",\"nativeType\":null,\"relationName\":\"pedidoToproduto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"produto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_produto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"80\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"80\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qntd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_coleta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_vendedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vendedor\",\"nativeType\":null,\"relationName\":\"produtoTovendedor\",\"relationFromFields\":[\"fk_vendedor\"],\"relationToFields\":[\"id_vendedor\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"pedidoToproduto\",\"relationFromFields\":[\"id_pedido\"],\"relationToFields\":[\"pedido_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vendedor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco_venda\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_vendedor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_vendedor\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_documento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_documento\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_documento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_vendedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_associacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"atende_um\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"atende_um\",\"nativeType\":null,\"relationName\":\"atende_umTovendedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"produto\",\"nativeType\":null,\"relationName\":\"produtoTovendedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"associacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"associacao\",\"nativeType\":null,\"relationName\":\"associacaoTovendedor\",\"relationFromFields\":[\"fk_associacao\"],\"relationToFields\":[\"id_associacao\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"tipo_documento\":{\"values\":[{\"name\":\"CPF\",\"dbName\":null},{\"name\":\"CNPJ\",\"dbName\":null}],\"dbName\":null},\"tipo_vendedor\":{\"values\":[{\"name\":\"PF\",\"dbName\":null},{\"name\":\"PJ\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

