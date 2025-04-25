
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model associacao
 * 
 */
export type associacao = $Result.DefaultSelection<Prisma.$associacaoPayload>
/**
 * Model atende_um
 * 
 */
export type atende_um = $Result.DefaultSelection<Prisma.$atende_umPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model feira
 * 
 */
export type feira = $Result.DefaultSelection<Prisma.$feiraPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model produto
 * 
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>
/**
 * Model vendedor
 * 
 */
export type vendedor = $Result.DefaultSelection<Prisma.$vendedorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tipo_documento: {
  CPF: 'CPF',
  CNPJ: 'CNPJ'
};

export type tipo_documento = (typeof tipo_documento)[keyof typeof tipo_documento]


export const tipo_vendedor: {
  PF: 'PF',
  PJ: 'PJ'
};

export type tipo_vendedor = (typeof tipo_vendedor)[keyof typeof tipo_vendedor]

}

export type tipo_documento = $Enums.tipo_documento

export const tipo_documento: typeof $Enums.tipo_documento

export type tipo_vendedor = $Enums.tipo_vendedor

export const tipo_vendedor: typeof $Enums.tipo_vendedor

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Associacaos
 * const associacaos = await prisma.associacao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Associacaos
   * const associacaos = await prisma.associacao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.associacao`: Exposes CRUD operations for the **associacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associacaos
    * const associacaos = await prisma.associacao.findMany()
    * ```
    */
  get associacao(): Prisma.associacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atende_um`: Exposes CRUD operations for the **atende_um** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atende_ums
    * const atende_ums = await prisma.atende_um.findMany()
    * ```
    */
  get atende_um(): Prisma.atende_umDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feira`: Exposes CRUD operations for the **feira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feiras
    * const feiras = await prisma.feira.findMany()
    * ```
    */
  get feira(): Prisma.feiraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedor`: Exposes CRUD operations for the **vendedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedors
    * const vendedors = await prisma.vendedor.findMany()
    * ```
    */
  get vendedor(): Prisma.vendedorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    associacao: 'associacao',
    atende_um: 'atende_um',
    cliente: 'cliente',
    feira: 'feira',
    pedido: 'pedido',
    produto: 'produto',
    vendedor: 'vendedor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "associacao" | "atende_um" | "cliente" | "feira" | "pedido" | "produto" | "vendedor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      associacao: {
        payload: Prisma.$associacaoPayload<ExtArgs>
        fields: Prisma.associacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.associacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.associacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          findFirst: {
            args: Prisma.associacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.associacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          findMany: {
            args: Prisma.associacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>[]
          }
          create: {
            args: Prisma.associacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          createMany: {
            args: Prisma.associacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.associacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>[]
          }
          delete: {
            args: Prisma.associacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          update: {
            args: Prisma.associacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          deleteMany: {
            args: Prisma.associacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.associacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.associacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>[]
          }
          upsert: {
            args: Prisma.associacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$associacaoPayload>
          }
          aggregate: {
            args: Prisma.AssociacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociacao>
          }
          groupBy: {
            args: Prisma.associacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.associacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AssociacaoCountAggregateOutputType> | number
          }
        }
      }
      atende_um: {
        payload: Prisma.$atende_umPayload<ExtArgs>
        fields: Prisma.atende_umFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atende_umFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atende_umFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          findFirst: {
            args: Prisma.atende_umFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atende_umFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          findMany: {
            args: Prisma.atende_umFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>[]
          }
          create: {
            args: Prisma.atende_umCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          createMany: {
            args: Prisma.atende_umCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.atende_umCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>[]
          }
          delete: {
            args: Prisma.atende_umDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          update: {
            args: Prisma.atende_umUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          deleteMany: {
            args: Prisma.atende_umDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.atende_umUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.atende_umUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>[]
          }
          upsert: {
            args: Prisma.atende_umUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atende_umPayload>
          }
          aggregate: {
            args: Prisma.Atende_umAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtende_um>
          }
          groupBy: {
            args: Prisma.atende_umGroupByArgs<ExtArgs>
            result: $Utils.Optional<Atende_umGroupByOutputType>[]
          }
          count: {
            args: Prisma.atende_umCountArgs<ExtArgs>
            result: $Utils.Optional<Atende_umCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      feira: {
        payload: Prisma.$feiraPayload<ExtArgs>
        fields: Prisma.feiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feiraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feiraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          findFirst: {
            args: Prisma.feiraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feiraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          findMany: {
            args: Prisma.feiraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>[]
          }
          create: {
            args: Prisma.feiraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          createMany: {
            args: Prisma.feiraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feiraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>[]
          }
          delete: {
            args: Prisma.feiraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          update: {
            args: Prisma.feiraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          deleteMany: {
            args: Prisma.feiraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feiraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feiraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>[]
          }
          upsert: {
            args: Prisma.feiraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feiraPayload>
          }
          aggregate: {
            args: Prisma.FeiraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeira>
          }
          groupBy: {
            args: Prisma.feiraGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.feiraCountArgs<ExtArgs>
            result: $Utils.Optional<FeiraCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      vendedor: {
        payload: Prisma.$vendedorPayload<ExtArgs>
        fields: Prisma.vendedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          findFirst: {
            args: Prisma.vendedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          findMany: {
            args: Prisma.vendedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>[]
          }
          create: {
            args: Prisma.vendedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          createMany: {
            args: Prisma.vendedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>[]
          }
          delete: {
            args: Prisma.vendedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          update: {
            args: Prisma.vendedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          deleteMany: {
            args: Prisma.vendedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>[]
          }
          upsert: {
            args: Prisma.vendedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedorPayload>
          }
          aggregate: {
            args: Prisma.VendedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedor>
          }
          groupBy: {
            args: Prisma.vendedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendedorCountArgs<ExtArgs>
            result: $Utils.Optional<VendedorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    associacao?: associacaoOmit
    atende_um?: atende_umOmit
    cliente?: clienteOmit
    feira?: feiraOmit
    pedido?: pedidoOmit
    produto?: produtoOmit
    vendedor?: vendedorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssociacaoCountOutputType
   */

  export type AssociacaoCountOutputType = {
    vendedor: number
  }

  export type AssociacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | AssociacaoCountOutputTypeCountVendedorArgs
  }

  // Custom InputTypes
  /**
   * AssociacaoCountOutputType without action
   */
  export type AssociacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociacaoCountOutputType
     */
    select?: AssociacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociacaoCountOutputType without action
   */
  export type AssociacaoCountOutputTypeCountVendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendedorWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type FeiraCountOutputType
   */

  export type FeiraCountOutputType = {
    pedido: number
  }

  export type FeiraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | FeiraCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * FeiraCountOutputType without action
   */
  export type FeiraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeiraCountOutputType
     */
    select?: FeiraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeiraCountOutputType without action
   */
  export type FeiraCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    atende_um: number
    produto: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atende_um?: boolean | PedidoCountOutputTypeCountAtende_umArgs
    produto?: boolean | PedidoCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountAtende_umArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atende_umWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type VendedorCountOutputType
   */

  export type VendedorCountOutputType = {
    atende_um: number
    produto: number
  }

  export type VendedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atende_um?: boolean | VendedorCountOutputTypeCountAtende_umArgs
    produto?: boolean | VendedorCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedorCountOutputType
     */
    select?: VendedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeCountAtende_umArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atende_umWhereInput
  }

  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model associacao
   */

  export type AggregateAssociacao = {
    _count: AssociacaoCountAggregateOutputType | null
    _min: AssociacaoMinAggregateOutputType | null
    _max: AssociacaoMaxAggregateOutputType | null
  }

  export type AssociacaoMinAggregateOutputType = {
    id_associacao: string | null
    nome: string | null
    descricao: string | null
  }

  export type AssociacaoMaxAggregateOutputType = {
    id_associacao: string | null
    nome: string | null
    descricao: string | null
  }

  export type AssociacaoCountAggregateOutputType = {
    id_associacao: number
    nome: number
    descricao: number
    _all: number
  }


  export type AssociacaoMinAggregateInputType = {
    id_associacao?: true
    nome?: true
    descricao?: true
  }

  export type AssociacaoMaxAggregateInputType = {
    id_associacao?: true
    nome?: true
    descricao?: true
  }

  export type AssociacaoCountAggregateInputType = {
    id_associacao?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type AssociacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which associacao to aggregate.
     */
    where?: associacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associacaos to fetch.
     */
    orderBy?: associacaoOrderByWithRelationInput | associacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: associacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned associacaos
    **/
    _count?: true | AssociacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociacaoMaxAggregateInputType
  }

  export type GetAssociacaoAggregateType<T extends AssociacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociacao[P]>
      : GetScalarType<T[P], AggregateAssociacao[P]>
  }




  export type associacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: associacaoWhereInput
    orderBy?: associacaoOrderByWithAggregationInput | associacaoOrderByWithAggregationInput[]
    by: AssociacaoScalarFieldEnum[] | AssociacaoScalarFieldEnum
    having?: associacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociacaoCountAggregateInputType | true
    _min?: AssociacaoMinAggregateInputType
    _max?: AssociacaoMaxAggregateInputType
  }

  export type AssociacaoGroupByOutputType = {
    id_associacao: string
    nome: string
    descricao: string
    _count: AssociacaoCountAggregateOutputType | null
    _min: AssociacaoMinAggregateOutputType | null
    _max: AssociacaoMaxAggregateOutputType | null
  }

  type GetAssociacaoGroupByPayload<T extends associacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AssociacaoGroupByOutputType[P]>
        }
      >
    >


  export type associacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_associacao?: boolean
    nome?: boolean
    descricao?: boolean
    vendedor?: boolean | associacao$vendedorArgs<ExtArgs>
    _count?: boolean | AssociacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["associacao"]>

  export type associacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_associacao?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["associacao"]>

  export type associacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_associacao?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["associacao"]>

  export type associacaoSelectScalar = {
    id_associacao?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type associacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_associacao" | "nome" | "descricao", ExtArgs["result"]["associacao"]>
  export type associacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | associacao$vendedorArgs<ExtArgs>
    _count?: boolean | AssociacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type associacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type associacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $associacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "associacao"
    objects: {
      vendedor: Prisma.$vendedorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_associacao: string
      nome: string
      descricao: string
    }, ExtArgs["result"]["associacao"]>
    composites: {}
  }

  type associacaoGetPayload<S extends boolean | null | undefined | associacaoDefaultArgs> = $Result.GetResult<Prisma.$associacaoPayload, S>

  type associacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<associacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociacaoCountAggregateInputType | true
    }

  export interface associacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['associacao'], meta: { name: 'associacao' } }
    /**
     * Find zero or one Associacao that matches the filter.
     * @param {associacaoFindUniqueArgs} args - Arguments to find a Associacao
     * @example
     * // Get one Associacao
     * const associacao = await prisma.associacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends associacaoFindUniqueArgs>(args: SelectSubset<T, associacaoFindUniqueArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Associacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {associacaoFindUniqueOrThrowArgs} args - Arguments to find a Associacao
     * @example
     * // Get one Associacao
     * const associacao = await prisma.associacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends associacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, associacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Associacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoFindFirstArgs} args - Arguments to find a Associacao
     * @example
     * // Get one Associacao
     * const associacao = await prisma.associacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends associacaoFindFirstArgs>(args?: SelectSubset<T, associacaoFindFirstArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Associacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoFindFirstOrThrowArgs} args - Arguments to find a Associacao
     * @example
     * // Get one Associacao
     * const associacao = await prisma.associacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends associacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, associacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associacaos
     * const associacaos = await prisma.associacao.findMany()
     * 
     * // Get first 10 Associacaos
     * const associacaos = await prisma.associacao.findMany({ take: 10 })
     * 
     * // Only select the `id_associacao`
     * const associacaoWithId_associacaoOnly = await prisma.associacao.findMany({ select: { id_associacao: true } })
     * 
     */
    findMany<T extends associacaoFindManyArgs>(args?: SelectSubset<T, associacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Associacao.
     * @param {associacaoCreateArgs} args - Arguments to create a Associacao.
     * @example
     * // Create one Associacao
     * const Associacao = await prisma.associacao.create({
     *   data: {
     *     // ... data to create a Associacao
     *   }
     * })
     * 
     */
    create<T extends associacaoCreateArgs>(args: SelectSubset<T, associacaoCreateArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associacaos.
     * @param {associacaoCreateManyArgs} args - Arguments to create many Associacaos.
     * @example
     * // Create many Associacaos
     * const associacao = await prisma.associacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends associacaoCreateManyArgs>(args?: SelectSubset<T, associacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associacaos and returns the data saved in the database.
     * @param {associacaoCreateManyAndReturnArgs} args - Arguments to create many Associacaos.
     * @example
     * // Create many Associacaos
     * const associacao = await prisma.associacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associacaos and only return the `id_associacao`
     * const associacaoWithId_associacaoOnly = await prisma.associacao.createManyAndReturn({
     *   select: { id_associacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends associacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, associacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Associacao.
     * @param {associacaoDeleteArgs} args - Arguments to delete one Associacao.
     * @example
     * // Delete one Associacao
     * const Associacao = await prisma.associacao.delete({
     *   where: {
     *     // ... filter to delete one Associacao
     *   }
     * })
     * 
     */
    delete<T extends associacaoDeleteArgs>(args: SelectSubset<T, associacaoDeleteArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Associacao.
     * @param {associacaoUpdateArgs} args - Arguments to update one Associacao.
     * @example
     * // Update one Associacao
     * const associacao = await prisma.associacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends associacaoUpdateArgs>(args: SelectSubset<T, associacaoUpdateArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associacaos.
     * @param {associacaoDeleteManyArgs} args - Arguments to filter Associacaos to delete.
     * @example
     * // Delete a few Associacaos
     * const { count } = await prisma.associacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends associacaoDeleteManyArgs>(args?: SelectSubset<T, associacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associacaos
     * const associacao = await prisma.associacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends associacaoUpdateManyArgs>(args: SelectSubset<T, associacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associacaos and returns the data updated in the database.
     * @param {associacaoUpdateManyAndReturnArgs} args - Arguments to update many Associacaos.
     * @example
     * // Update many Associacaos
     * const associacao = await prisma.associacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Associacaos and only return the `id_associacao`
     * const associacaoWithId_associacaoOnly = await prisma.associacao.updateManyAndReturn({
     *   select: { id_associacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends associacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, associacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Associacao.
     * @param {associacaoUpsertArgs} args - Arguments to update or create a Associacao.
     * @example
     * // Update or create a Associacao
     * const associacao = await prisma.associacao.upsert({
     *   create: {
     *     // ... data to create a Associacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Associacao we want to update
     *   }
     * })
     */
    upsert<T extends associacaoUpsertArgs>(args: SelectSubset<T, associacaoUpsertArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoCountArgs} args - Arguments to filter Associacaos to count.
     * @example
     * // Count the number of Associacaos
     * const count = await prisma.associacao.count({
     *   where: {
     *     // ... the filter for the Associacaos we want to count
     *   }
     * })
    **/
    count<T extends associacaoCountArgs>(
      args?: Subset<T, associacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Associacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssociacaoAggregateArgs>(args: Subset<T, AssociacaoAggregateArgs>): Prisma.PrismaPromise<GetAssociacaoAggregateType<T>>

    /**
     * Group by Associacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends associacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: associacaoGroupByArgs['orderBy'] }
        : { orderBy?: associacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, associacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the associacao model
   */
  readonly fields: associacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for associacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__associacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendedor<T extends associacao$vendedorArgs<ExtArgs> = {}>(args?: Subset<T, associacao$vendedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the associacao model
   */
  interface associacaoFieldRefs {
    readonly id_associacao: FieldRef<"associacao", 'String'>
    readonly nome: FieldRef<"associacao", 'String'>
    readonly descricao: FieldRef<"associacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * associacao findUnique
   */
  export type associacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter, which associacao to fetch.
     */
    where: associacaoWhereUniqueInput
  }

  /**
   * associacao findUniqueOrThrow
   */
  export type associacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter, which associacao to fetch.
     */
    where: associacaoWhereUniqueInput
  }

  /**
   * associacao findFirst
   */
  export type associacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter, which associacao to fetch.
     */
    where?: associacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associacaos to fetch.
     */
    orderBy?: associacaoOrderByWithRelationInput | associacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for associacaos.
     */
    cursor?: associacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of associacaos.
     */
    distinct?: AssociacaoScalarFieldEnum | AssociacaoScalarFieldEnum[]
  }

  /**
   * associacao findFirstOrThrow
   */
  export type associacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter, which associacao to fetch.
     */
    where?: associacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associacaos to fetch.
     */
    orderBy?: associacaoOrderByWithRelationInput | associacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for associacaos.
     */
    cursor?: associacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of associacaos.
     */
    distinct?: AssociacaoScalarFieldEnum | AssociacaoScalarFieldEnum[]
  }

  /**
   * associacao findMany
   */
  export type associacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter, which associacaos to fetch.
     */
    where?: associacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associacaos to fetch.
     */
    orderBy?: associacaoOrderByWithRelationInput | associacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing associacaos.
     */
    cursor?: associacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associacaos.
     */
    skip?: number
    distinct?: AssociacaoScalarFieldEnum | AssociacaoScalarFieldEnum[]
  }

  /**
   * associacao create
   */
  export type associacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a associacao.
     */
    data: XOR<associacaoCreateInput, associacaoUncheckedCreateInput>
  }

  /**
   * associacao createMany
   */
  export type associacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many associacaos.
     */
    data: associacaoCreateManyInput | associacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * associacao createManyAndReturn
   */
  export type associacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * The data used to create many associacaos.
     */
    data: associacaoCreateManyInput | associacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * associacao update
   */
  export type associacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a associacao.
     */
    data: XOR<associacaoUpdateInput, associacaoUncheckedUpdateInput>
    /**
     * Choose, which associacao to update.
     */
    where: associacaoWhereUniqueInput
  }

  /**
   * associacao updateMany
   */
  export type associacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update associacaos.
     */
    data: XOR<associacaoUpdateManyMutationInput, associacaoUncheckedUpdateManyInput>
    /**
     * Filter which associacaos to update
     */
    where?: associacaoWhereInput
    /**
     * Limit how many associacaos to update.
     */
    limit?: number
  }

  /**
   * associacao updateManyAndReturn
   */
  export type associacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * The data used to update associacaos.
     */
    data: XOR<associacaoUpdateManyMutationInput, associacaoUncheckedUpdateManyInput>
    /**
     * Filter which associacaos to update
     */
    where?: associacaoWhereInput
    /**
     * Limit how many associacaos to update.
     */
    limit?: number
  }

  /**
   * associacao upsert
   */
  export type associacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the associacao to update in case it exists.
     */
    where: associacaoWhereUniqueInput
    /**
     * In case the associacao found by the `where` argument doesn't exist, create a new associacao with this data.
     */
    create: XOR<associacaoCreateInput, associacaoUncheckedCreateInput>
    /**
     * In case the associacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<associacaoUpdateInput, associacaoUncheckedUpdateInput>
  }

  /**
   * associacao delete
   */
  export type associacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    /**
     * Filter which associacao to delete.
     */
    where: associacaoWhereUniqueInput
  }

  /**
   * associacao deleteMany
   */
  export type associacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which associacaos to delete
     */
    where?: associacaoWhereInput
    /**
     * Limit how many associacaos to delete.
     */
    limit?: number
  }

  /**
   * associacao.vendedor
   */
  export type associacao$vendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    where?: vendedorWhereInput
    orderBy?: vendedorOrderByWithRelationInput | vendedorOrderByWithRelationInput[]
    cursor?: vendedorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * associacao without action
   */
  export type associacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
  }


  /**
   * Model atende_um
   */

  export type AggregateAtende_um = {
    _count: Atende_umCountAggregateOutputType | null
    _avg: Atende_umAvgAggregateOutputType | null
    _sum: Atende_umSumAggregateOutputType | null
    _min: Atende_umMinAggregateOutputType | null
    _max: Atende_umMaxAggregateOutputType | null
  }

  export type Atende_umAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type Atende_umSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type Atende_umMinAggregateOutputType = {
    id_pedido: number | null
    id_vendedor: string | null
  }

  export type Atende_umMaxAggregateOutputType = {
    id_pedido: number | null
    id_vendedor: string | null
  }

  export type Atende_umCountAggregateOutputType = {
    id_pedido: number
    id_vendedor: number
    _all: number
  }


  export type Atende_umAvgAggregateInputType = {
    id_pedido?: true
  }

  export type Atende_umSumAggregateInputType = {
    id_pedido?: true
  }

  export type Atende_umMinAggregateInputType = {
    id_pedido?: true
    id_vendedor?: true
  }

  export type Atende_umMaxAggregateInputType = {
    id_pedido?: true
    id_vendedor?: true
  }

  export type Atende_umCountAggregateInputType = {
    id_pedido?: true
    id_vendedor?: true
    _all?: true
  }

  export type Atende_umAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atende_um to aggregate.
     */
    where?: atende_umWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atende_ums to fetch.
     */
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atende_umWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atende_ums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atende_ums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atende_ums
    **/
    _count?: true | Atende_umCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Atende_umAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Atende_umSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Atende_umMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Atende_umMaxAggregateInputType
  }

  export type GetAtende_umAggregateType<T extends Atende_umAggregateArgs> = {
        [P in keyof T & keyof AggregateAtende_um]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtende_um[P]>
      : GetScalarType<T[P], AggregateAtende_um[P]>
  }




  export type atende_umGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atende_umWhereInput
    orderBy?: atende_umOrderByWithAggregationInput | atende_umOrderByWithAggregationInput[]
    by: Atende_umScalarFieldEnum[] | Atende_umScalarFieldEnum
    having?: atende_umScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Atende_umCountAggregateInputType | true
    _avg?: Atende_umAvgAggregateInputType
    _sum?: Atende_umSumAggregateInputType
    _min?: Atende_umMinAggregateInputType
    _max?: Atende_umMaxAggregateInputType
  }

  export type Atende_umGroupByOutputType = {
    id_pedido: number
    id_vendedor: string
    _count: Atende_umCountAggregateOutputType | null
    _avg: Atende_umAvgAggregateOutputType | null
    _sum: Atende_umSumAggregateOutputType | null
    _min: Atende_umMinAggregateOutputType | null
    _max: Atende_umMaxAggregateOutputType | null
  }

  type GetAtende_umGroupByPayload<T extends atende_umGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Atende_umGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Atende_umGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Atende_umGroupByOutputType[P]>
            : GetScalarType<T[P], Atende_umGroupByOutputType[P]>
        }
      >
    >


  export type atende_umSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    id_vendedor?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atende_um"]>

  export type atende_umSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    id_vendedor?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atende_um"]>

  export type atende_umSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    id_vendedor?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atende_um"]>

  export type atende_umSelectScalar = {
    id_pedido?: boolean
    id_vendedor?: boolean
  }

  export type atende_umOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "id_vendedor", ExtArgs["result"]["atende_um"]>
  export type atende_umInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }
  export type atende_umIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }
  export type atende_umIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    vendedor?: boolean | vendedorDefaultArgs<ExtArgs>
  }

  export type $atende_umPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atende_um"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      vendedor: Prisma.$vendedorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      id_vendedor: string
    }, ExtArgs["result"]["atende_um"]>
    composites: {}
  }

  type atende_umGetPayload<S extends boolean | null | undefined | atende_umDefaultArgs> = $Result.GetResult<Prisma.$atende_umPayload, S>

  type atende_umCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<atende_umFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Atende_umCountAggregateInputType | true
    }

  export interface atende_umDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atende_um'], meta: { name: 'atende_um' } }
    /**
     * Find zero or one Atende_um that matches the filter.
     * @param {atende_umFindUniqueArgs} args - Arguments to find a Atende_um
     * @example
     * // Get one Atende_um
     * const atende_um = await prisma.atende_um.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends atende_umFindUniqueArgs>(args: SelectSubset<T, atende_umFindUniqueArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atende_um that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {atende_umFindUniqueOrThrowArgs} args - Arguments to find a Atende_um
     * @example
     * // Get one Atende_um
     * const atende_um = await prisma.atende_um.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends atende_umFindUniqueOrThrowArgs>(args: SelectSubset<T, atende_umFindUniqueOrThrowArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atende_um that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umFindFirstArgs} args - Arguments to find a Atende_um
     * @example
     * // Get one Atende_um
     * const atende_um = await prisma.atende_um.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends atende_umFindFirstArgs>(args?: SelectSubset<T, atende_umFindFirstArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atende_um that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umFindFirstOrThrowArgs} args - Arguments to find a Atende_um
     * @example
     * // Get one Atende_um
     * const atende_um = await prisma.atende_um.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends atende_umFindFirstOrThrowArgs>(args?: SelectSubset<T, atende_umFindFirstOrThrowArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atende_ums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atende_ums
     * const atende_ums = await prisma.atende_um.findMany()
     * 
     * // Get first 10 Atende_ums
     * const atende_ums = await prisma.atende_um.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const atende_umWithId_pedidoOnly = await prisma.atende_um.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends atende_umFindManyArgs>(args?: SelectSubset<T, atende_umFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atende_um.
     * @param {atende_umCreateArgs} args - Arguments to create a Atende_um.
     * @example
     * // Create one Atende_um
     * const Atende_um = await prisma.atende_um.create({
     *   data: {
     *     // ... data to create a Atende_um
     *   }
     * })
     * 
     */
    create<T extends atende_umCreateArgs>(args: SelectSubset<T, atende_umCreateArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atende_ums.
     * @param {atende_umCreateManyArgs} args - Arguments to create many Atende_ums.
     * @example
     * // Create many Atende_ums
     * const atende_um = await prisma.atende_um.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends atende_umCreateManyArgs>(args?: SelectSubset<T, atende_umCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atende_ums and returns the data saved in the database.
     * @param {atende_umCreateManyAndReturnArgs} args - Arguments to create many Atende_ums.
     * @example
     * // Create many Atende_ums
     * const atende_um = await prisma.atende_um.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atende_ums and only return the `id_pedido`
     * const atende_umWithId_pedidoOnly = await prisma.atende_um.createManyAndReturn({
     *   select: { id_pedido: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends atende_umCreateManyAndReturnArgs>(args?: SelectSubset<T, atende_umCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atende_um.
     * @param {atende_umDeleteArgs} args - Arguments to delete one Atende_um.
     * @example
     * // Delete one Atende_um
     * const Atende_um = await prisma.atende_um.delete({
     *   where: {
     *     // ... filter to delete one Atende_um
     *   }
     * })
     * 
     */
    delete<T extends atende_umDeleteArgs>(args: SelectSubset<T, atende_umDeleteArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atende_um.
     * @param {atende_umUpdateArgs} args - Arguments to update one Atende_um.
     * @example
     * // Update one Atende_um
     * const atende_um = await prisma.atende_um.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends atende_umUpdateArgs>(args: SelectSubset<T, atende_umUpdateArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atende_ums.
     * @param {atende_umDeleteManyArgs} args - Arguments to filter Atende_ums to delete.
     * @example
     * // Delete a few Atende_ums
     * const { count } = await prisma.atende_um.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends atende_umDeleteManyArgs>(args?: SelectSubset<T, atende_umDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atende_ums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atende_ums
     * const atende_um = await prisma.atende_um.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends atende_umUpdateManyArgs>(args: SelectSubset<T, atende_umUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atende_ums and returns the data updated in the database.
     * @param {atende_umUpdateManyAndReturnArgs} args - Arguments to update many Atende_ums.
     * @example
     * // Update many Atende_ums
     * const atende_um = await prisma.atende_um.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atende_ums and only return the `id_pedido`
     * const atende_umWithId_pedidoOnly = await prisma.atende_um.updateManyAndReturn({
     *   select: { id_pedido: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends atende_umUpdateManyAndReturnArgs>(args: SelectSubset<T, atende_umUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atende_um.
     * @param {atende_umUpsertArgs} args - Arguments to update or create a Atende_um.
     * @example
     * // Update or create a Atende_um
     * const atende_um = await prisma.atende_um.upsert({
     *   create: {
     *     // ... data to create a Atende_um
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atende_um we want to update
     *   }
     * })
     */
    upsert<T extends atende_umUpsertArgs>(args: SelectSubset<T, atende_umUpsertArgs<ExtArgs>>): Prisma__atende_umClient<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atende_ums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umCountArgs} args - Arguments to filter Atende_ums to count.
     * @example
     * // Count the number of Atende_ums
     * const count = await prisma.atende_um.count({
     *   where: {
     *     // ... the filter for the Atende_ums we want to count
     *   }
     * })
    **/
    count<T extends atende_umCountArgs>(
      args?: Subset<T, atende_umCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Atende_umCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atende_um.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Atende_umAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Atende_umAggregateArgs>(args: Subset<T, Atende_umAggregateArgs>): Prisma.PrismaPromise<GetAtende_umAggregateType<T>>

    /**
     * Group by Atende_um.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atende_umGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends atende_umGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atende_umGroupByArgs['orderBy'] }
        : { orderBy?: atende_umGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, atende_umGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtende_umGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atende_um model
   */
  readonly fields: atende_umFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atende_um.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atende_umClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendedor<T extends vendedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vendedorDefaultArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the atende_um model
   */
  interface atende_umFieldRefs {
    readonly id_pedido: FieldRef<"atende_um", 'Int'>
    readonly id_vendedor: FieldRef<"atende_um", 'String'>
  }
    

  // Custom InputTypes
  /**
   * atende_um findUnique
   */
  export type atende_umFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter, which atende_um to fetch.
     */
    where: atende_umWhereUniqueInput
  }

  /**
   * atende_um findUniqueOrThrow
   */
  export type atende_umFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter, which atende_um to fetch.
     */
    where: atende_umWhereUniqueInput
  }

  /**
   * atende_um findFirst
   */
  export type atende_umFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter, which atende_um to fetch.
     */
    where?: atende_umWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atende_ums to fetch.
     */
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atende_ums.
     */
    cursor?: atende_umWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atende_ums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atende_ums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atende_ums.
     */
    distinct?: Atende_umScalarFieldEnum | Atende_umScalarFieldEnum[]
  }

  /**
   * atende_um findFirstOrThrow
   */
  export type atende_umFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter, which atende_um to fetch.
     */
    where?: atende_umWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atende_ums to fetch.
     */
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atende_ums.
     */
    cursor?: atende_umWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atende_ums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atende_ums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atende_ums.
     */
    distinct?: Atende_umScalarFieldEnum | Atende_umScalarFieldEnum[]
  }

  /**
   * atende_um findMany
   */
  export type atende_umFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter, which atende_ums to fetch.
     */
    where?: atende_umWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atende_ums to fetch.
     */
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atende_ums.
     */
    cursor?: atende_umWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atende_ums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atende_ums.
     */
    skip?: number
    distinct?: Atende_umScalarFieldEnum | Atende_umScalarFieldEnum[]
  }

  /**
   * atende_um create
   */
  export type atende_umCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * The data needed to create a atende_um.
     */
    data: XOR<atende_umCreateInput, atende_umUncheckedCreateInput>
  }

  /**
   * atende_um createMany
   */
  export type atende_umCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atende_ums.
     */
    data: atende_umCreateManyInput | atende_umCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * atende_um createManyAndReturn
   */
  export type atende_umCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * The data used to create many atende_ums.
     */
    data: atende_umCreateManyInput | atende_umCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * atende_um update
   */
  export type atende_umUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * The data needed to update a atende_um.
     */
    data: XOR<atende_umUpdateInput, atende_umUncheckedUpdateInput>
    /**
     * Choose, which atende_um to update.
     */
    where: atende_umWhereUniqueInput
  }

  /**
   * atende_um updateMany
   */
  export type atende_umUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atende_ums.
     */
    data: XOR<atende_umUpdateManyMutationInput, atende_umUncheckedUpdateManyInput>
    /**
     * Filter which atende_ums to update
     */
    where?: atende_umWhereInput
    /**
     * Limit how many atende_ums to update.
     */
    limit?: number
  }

  /**
   * atende_um updateManyAndReturn
   */
  export type atende_umUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * The data used to update atende_ums.
     */
    data: XOR<atende_umUpdateManyMutationInput, atende_umUncheckedUpdateManyInput>
    /**
     * Filter which atende_ums to update
     */
    where?: atende_umWhereInput
    /**
     * Limit how many atende_ums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * atende_um upsert
   */
  export type atende_umUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * The filter to search for the atende_um to update in case it exists.
     */
    where: atende_umWhereUniqueInput
    /**
     * In case the atende_um found by the `where` argument doesn't exist, create a new atende_um with this data.
     */
    create: XOR<atende_umCreateInput, atende_umUncheckedCreateInput>
    /**
     * In case the atende_um was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atende_umUpdateInput, atende_umUncheckedUpdateInput>
  }

  /**
   * atende_um delete
   */
  export type atende_umDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    /**
     * Filter which atende_um to delete.
     */
    where: atende_umWhereUniqueInput
  }

  /**
   * atende_um deleteMany
   */
  export type atende_umDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atende_ums to delete
     */
    where?: atende_umWhereInput
    /**
     * Limit how many atende_ums to delete.
     */
    limit?: number
  }

  /**
   * atende_um without action
   */
  export type atende_umDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type ClienteCountAggregateOutputType = {
    cpf: number
    nome: number
    email: number
    telefone: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    cpf?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type ClienteMaxAggregateInputType = {
    cpf?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type ClienteCountAggregateInputType = {
    cpf?: true
    nome?: true
    email?: true
    telefone?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cpf: string
    nome: string
    email: string
    telefone: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    cpf?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "email" | "telefone", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      email: string
      telefone: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cpf: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends cliente$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, cliente$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly cpf: FieldRef<"cliente", 'String'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly email: FieldRef<"cliente", 'String'>
    readonly telefone: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.pedido
   */
  export type cliente$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model feira
   */

  export type AggregateFeira = {
    _count: FeiraCountAggregateOutputType | null
    _avg: FeiraAvgAggregateOutputType | null
    _sum: FeiraSumAggregateOutputType | null
    _min: FeiraMinAggregateOutputType | null
    _max: FeiraMaxAggregateOutputType | null
  }

  export type FeiraAvgAggregateOutputType = {
    id_feira: number | null
  }

  export type FeiraSumAggregateOutputType = {
    id_feira: number | null
  }

  export type FeiraMinAggregateOutputType = {
    id_feira: number | null
    nome: string | null
    endereco: string | null
  }

  export type FeiraMaxAggregateOutputType = {
    id_feira: number | null
    nome: string | null
    endereco: string | null
  }

  export type FeiraCountAggregateOutputType = {
    id_feira: number
    nome: number
    endereco: number
    _all: number
  }


  export type FeiraAvgAggregateInputType = {
    id_feira?: true
  }

  export type FeiraSumAggregateInputType = {
    id_feira?: true
  }

  export type FeiraMinAggregateInputType = {
    id_feira?: true
    nome?: true
    endereco?: true
  }

  export type FeiraMaxAggregateInputType = {
    id_feira?: true
    nome?: true
    endereco?: true
  }

  export type FeiraCountAggregateInputType = {
    id_feira?: true
    nome?: true
    endereco?: true
    _all?: true
  }

  export type FeiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feira to aggregate.
     */
    where?: feiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feiras to fetch.
     */
    orderBy?: feiraOrderByWithRelationInput | feiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feiras
    **/
    _count?: true | FeiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeiraMaxAggregateInputType
  }

  export type GetFeiraAggregateType<T extends FeiraAggregateArgs> = {
        [P in keyof T & keyof AggregateFeira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeira[P]>
      : GetScalarType<T[P], AggregateFeira[P]>
  }




  export type feiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feiraWhereInput
    orderBy?: feiraOrderByWithAggregationInput | feiraOrderByWithAggregationInput[]
    by: FeiraScalarFieldEnum[] | FeiraScalarFieldEnum
    having?: feiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeiraCountAggregateInputType | true
    _avg?: FeiraAvgAggregateInputType
    _sum?: FeiraSumAggregateInputType
    _min?: FeiraMinAggregateInputType
    _max?: FeiraMaxAggregateInputType
  }

  export type FeiraGroupByOutputType = {
    id_feira: number
    nome: string
    endereco: string
    _count: FeiraCountAggregateOutputType | null
    _avg: FeiraAvgAggregateOutputType | null
    _sum: FeiraSumAggregateOutputType | null
    _min: FeiraMinAggregateOutputType | null
    _max: FeiraMaxAggregateOutputType | null
  }

  type GetFeiraGroupByPayload<T extends feiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeiraGroupByOutputType[P]>
            : GetScalarType<T[P], FeiraGroupByOutputType[P]>
        }
      >
    >


  export type feiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feira?: boolean
    nome?: boolean
    endereco?: boolean
    pedido?: boolean | feira$pedidoArgs<ExtArgs>
    _count?: boolean | FeiraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feira"]>

  export type feiraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feira?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["feira"]>

  export type feiraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feira?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["feira"]>

  export type feiraSelectScalar = {
    id_feira?: boolean
    nome?: boolean
    endereco?: boolean
  }

  export type feiraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_feira" | "nome" | "endereco", ExtArgs["result"]["feira"]>
  export type feiraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | feira$pedidoArgs<ExtArgs>
    _count?: boolean | FeiraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type feiraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type feiraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $feiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feira"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_feira: number
      nome: string
      endereco: string
    }, ExtArgs["result"]["feira"]>
    composites: {}
  }

  type feiraGetPayload<S extends boolean | null | undefined | feiraDefaultArgs> = $Result.GetResult<Prisma.$feiraPayload, S>

  type feiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feiraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeiraCountAggregateInputType | true
    }

  export interface feiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feira'], meta: { name: 'feira' } }
    /**
     * Find zero or one Feira that matches the filter.
     * @param {feiraFindUniqueArgs} args - Arguments to find a Feira
     * @example
     * // Get one Feira
     * const feira = await prisma.feira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feiraFindUniqueArgs>(args: SelectSubset<T, feiraFindUniqueArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feira that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feiraFindUniqueOrThrowArgs} args - Arguments to find a Feira
     * @example
     * // Get one Feira
     * const feira = await prisma.feira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feiraFindUniqueOrThrowArgs>(args: SelectSubset<T, feiraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraFindFirstArgs} args - Arguments to find a Feira
     * @example
     * // Get one Feira
     * const feira = await prisma.feira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feiraFindFirstArgs>(args?: SelectSubset<T, feiraFindFirstArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraFindFirstOrThrowArgs} args - Arguments to find a Feira
     * @example
     * // Get one Feira
     * const feira = await prisma.feira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feiraFindFirstOrThrowArgs>(args?: SelectSubset<T, feiraFindFirstOrThrowArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feiras
     * const feiras = await prisma.feira.findMany()
     * 
     * // Get first 10 Feiras
     * const feiras = await prisma.feira.findMany({ take: 10 })
     * 
     * // Only select the `id_feira`
     * const feiraWithId_feiraOnly = await prisma.feira.findMany({ select: { id_feira: true } })
     * 
     */
    findMany<T extends feiraFindManyArgs>(args?: SelectSubset<T, feiraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feira.
     * @param {feiraCreateArgs} args - Arguments to create a Feira.
     * @example
     * // Create one Feira
     * const Feira = await prisma.feira.create({
     *   data: {
     *     // ... data to create a Feira
     *   }
     * })
     * 
     */
    create<T extends feiraCreateArgs>(args: SelectSubset<T, feiraCreateArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feiras.
     * @param {feiraCreateManyArgs} args - Arguments to create many Feiras.
     * @example
     * // Create many Feiras
     * const feira = await prisma.feira.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feiraCreateManyArgs>(args?: SelectSubset<T, feiraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feiras and returns the data saved in the database.
     * @param {feiraCreateManyAndReturnArgs} args - Arguments to create many Feiras.
     * @example
     * // Create many Feiras
     * const feira = await prisma.feira.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feiras and only return the `id_feira`
     * const feiraWithId_feiraOnly = await prisma.feira.createManyAndReturn({
     *   select: { id_feira: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feiraCreateManyAndReturnArgs>(args?: SelectSubset<T, feiraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feira.
     * @param {feiraDeleteArgs} args - Arguments to delete one Feira.
     * @example
     * // Delete one Feira
     * const Feira = await prisma.feira.delete({
     *   where: {
     *     // ... filter to delete one Feira
     *   }
     * })
     * 
     */
    delete<T extends feiraDeleteArgs>(args: SelectSubset<T, feiraDeleteArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feira.
     * @param {feiraUpdateArgs} args - Arguments to update one Feira.
     * @example
     * // Update one Feira
     * const feira = await prisma.feira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feiraUpdateArgs>(args: SelectSubset<T, feiraUpdateArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feiras.
     * @param {feiraDeleteManyArgs} args - Arguments to filter Feiras to delete.
     * @example
     * // Delete a few Feiras
     * const { count } = await prisma.feira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feiraDeleteManyArgs>(args?: SelectSubset<T, feiraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feiras
     * const feira = await prisma.feira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feiraUpdateManyArgs>(args: SelectSubset<T, feiraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feiras and returns the data updated in the database.
     * @param {feiraUpdateManyAndReturnArgs} args - Arguments to update many Feiras.
     * @example
     * // Update many Feiras
     * const feira = await prisma.feira.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feiras and only return the `id_feira`
     * const feiraWithId_feiraOnly = await prisma.feira.updateManyAndReturn({
     *   select: { id_feira: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends feiraUpdateManyAndReturnArgs>(args: SelectSubset<T, feiraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feira.
     * @param {feiraUpsertArgs} args - Arguments to update or create a Feira.
     * @example
     * // Update or create a Feira
     * const feira = await prisma.feira.upsert({
     *   create: {
     *     // ... data to create a Feira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feira we want to update
     *   }
     * })
     */
    upsert<T extends feiraUpsertArgs>(args: SelectSubset<T, feiraUpsertArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraCountArgs} args - Arguments to filter Feiras to count.
     * @example
     * // Count the number of Feiras
     * const count = await prisma.feira.count({
     *   where: {
     *     // ... the filter for the Feiras we want to count
     *   }
     * })
    **/
    count<T extends feiraCountArgs>(
      args?: Subset<T, feiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeiraAggregateArgs>(args: Subset<T, FeiraAggregateArgs>): Prisma.PrismaPromise<GetFeiraAggregateType<T>>

    /**
     * Group by Feira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feiraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feiraGroupByArgs['orderBy'] }
        : { orderBy?: feiraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feira model
   */
  readonly fields: feiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends feira$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, feira$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feira model
   */
  interface feiraFieldRefs {
    readonly id_feira: FieldRef<"feira", 'Int'>
    readonly nome: FieldRef<"feira", 'String'>
    readonly endereco: FieldRef<"feira", 'String'>
  }
    

  // Custom InputTypes
  /**
   * feira findUnique
   */
  export type feiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter, which feira to fetch.
     */
    where: feiraWhereUniqueInput
  }

  /**
   * feira findUniqueOrThrow
   */
  export type feiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter, which feira to fetch.
     */
    where: feiraWhereUniqueInput
  }

  /**
   * feira findFirst
   */
  export type feiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter, which feira to fetch.
     */
    where?: feiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feiras to fetch.
     */
    orderBy?: feiraOrderByWithRelationInput | feiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feiras.
     */
    cursor?: feiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feiras.
     */
    distinct?: FeiraScalarFieldEnum | FeiraScalarFieldEnum[]
  }

  /**
   * feira findFirstOrThrow
   */
  export type feiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter, which feira to fetch.
     */
    where?: feiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feiras to fetch.
     */
    orderBy?: feiraOrderByWithRelationInput | feiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feiras.
     */
    cursor?: feiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feiras.
     */
    distinct?: FeiraScalarFieldEnum | FeiraScalarFieldEnum[]
  }

  /**
   * feira findMany
   */
  export type feiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter, which feiras to fetch.
     */
    where?: feiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feiras to fetch.
     */
    orderBy?: feiraOrderByWithRelationInput | feiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feiras.
     */
    cursor?: feiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feiras.
     */
    skip?: number
    distinct?: FeiraScalarFieldEnum | FeiraScalarFieldEnum[]
  }

  /**
   * feira create
   */
  export type feiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * The data needed to create a feira.
     */
    data: XOR<feiraCreateInput, feiraUncheckedCreateInput>
  }

  /**
   * feira createMany
   */
  export type feiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feiras.
     */
    data: feiraCreateManyInput | feiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feira createManyAndReturn
   */
  export type feiraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * The data used to create many feiras.
     */
    data: feiraCreateManyInput | feiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feira update
   */
  export type feiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * The data needed to update a feira.
     */
    data: XOR<feiraUpdateInput, feiraUncheckedUpdateInput>
    /**
     * Choose, which feira to update.
     */
    where: feiraWhereUniqueInput
  }

  /**
   * feira updateMany
   */
  export type feiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feiras.
     */
    data: XOR<feiraUpdateManyMutationInput, feiraUncheckedUpdateManyInput>
    /**
     * Filter which feiras to update
     */
    where?: feiraWhereInput
    /**
     * Limit how many feiras to update.
     */
    limit?: number
  }

  /**
   * feira updateManyAndReturn
   */
  export type feiraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * The data used to update feiras.
     */
    data: XOR<feiraUpdateManyMutationInput, feiraUncheckedUpdateManyInput>
    /**
     * Filter which feiras to update
     */
    where?: feiraWhereInput
    /**
     * Limit how many feiras to update.
     */
    limit?: number
  }

  /**
   * feira upsert
   */
  export type feiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * The filter to search for the feira to update in case it exists.
     */
    where: feiraWhereUniqueInput
    /**
     * In case the feira found by the `where` argument doesn't exist, create a new feira with this data.
     */
    create: XOR<feiraCreateInput, feiraUncheckedCreateInput>
    /**
     * In case the feira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feiraUpdateInput, feiraUncheckedUpdateInput>
  }

  /**
   * feira delete
   */
  export type feiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    /**
     * Filter which feira to delete.
     */
    where: feiraWhereUniqueInput
  }

  /**
   * feira deleteMany
   */
  export type feiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feiras to delete
     */
    where?: feiraWhereInput
    /**
     * Limit how many feiras to delete.
     */
    limit?: number
  }

  /**
   * feira.pedido
   */
  export type feira$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * feira without action
   */
  export type feiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    pedido_id: number | null
    fk_feira: number | null
  }

  export type PedidoSumAggregateOutputType = {
    pedido_id: number | null
    fk_feira: number | null
  }

  export type PedidoMinAggregateOutputType = {
    pedido_id: number | null
    data_pedido: Date | null
    endereco_entrega: string | null
    fk_feira: number | null
    fk_cliente: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    pedido_id: number | null
    data_pedido: Date | null
    endereco_entrega: string | null
    fk_feira: number | null
    fk_cliente: string | null
  }

  export type PedidoCountAggregateOutputType = {
    pedido_id: number
    data_pedido: number
    endereco_entrega: number
    fk_feira: number
    fk_cliente: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    pedido_id?: true
    fk_feira?: true
  }

  export type PedidoSumAggregateInputType = {
    pedido_id?: true
    fk_feira?: true
  }

  export type PedidoMinAggregateInputType = {
    pedido_id?: true
    data_pedido?: true
    endereco_entrega?: true
    fk_feira?: true
    fk_cliente?: true
  }

  export type PedidoMaxAggregateInputType = {
    pedido_id?: true
    data_pedido?: true
    endereco_entrega?: true
    fk_feira?: true
    fk_cliente?: true
  }

  export type PedidoCountAggregateInputType = {
    pedido_id?: true
    data_pedido?: true
    endereco_entrega?: true
    fk_feira?: true
    fk_cliente?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    pedido_id: number
    data_pedido: Date
    endereco_entrega: string
    fk_feira: number | null
    fk_cliente: string | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    data_pedido?: boolean
    endereco_entrega?: boolean
    fk_feira?: boolean
    fk_cliente?: boolean
    atende_um?: boolean | pedido$atende_umArgs<ExtArgs>
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
    produto?: boolean | pedido$produtoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    data_pedido?: boolean
    endereco_entrega?: boolean
    fk_feira?: boolean
    fk_cliente?: boolean
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    data_pedido?: boolean
    endereco_entrega?: boolean
    fk_feira?: boolean
    fk_cliente?: boolean
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    pedido_id?: boolean
    data_pedido?: boolean
    endereco_entrega?: boolean
    fk_feira?: boolean
    fk_cliente?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "data_pedido" | "endereco_entrega" | "fk_feira" | "fk_cliente", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atende_um?: boolean | pedido$atende_umArgs<ExtArgs>
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
    produto?: boolean | pedido$produtoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
  }
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    feira?: boolean | pedido$feiraArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      atende_um: Prisma.$atende_umPayload<ExtArgs>[]
      cliente: Prisma.$clientePayload<ExtArgs> | null
      feira: Prisma.$feiraPayload<ExtArgs> | null
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      data_pedido: Date
      endereco_entrega: string
      fk_feira: number | null
      fk_cliente: string | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.createManyAndReturn({
     *   select: { pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { pedido_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atende_um<T extends pedido$atende_umArgs<ExtArgs> = {}>(args?: Subset<T, pedido$atende_umArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends pedido$clienteArgs<ExtArgs> = {}>(args?: Subset<T, pedido$clienteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feira<T extends pedido$feiraArgs<ExtArgs> = {}>(args?: Subset<T, pedido$feiraArgs<ExtArgs>>): Prisma__feiraClient<$Result.GetResult<Prisma.$feiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto<T extends pedido$produtoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly pedido_id: FieldRef<"pedido", 'Int'>
    readonly data_pedido: FieldRef<"pedido", 'DateTime'>
    readonly endereco_entrega: FieldRef<"pedido", 'String'>
    readonly fk_feira: FieldRef<"pedido", 'Int'>
    readonly fk_cliente: FieldRef<"pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.atende_um
   */
  export type pedido$atende_umArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    where?: atende_umWhereInput
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    cursor?: atende_umWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Atende_umScalarFieldEnum | Atende_umScalarFieldEnum[]
  }

  /**
   * pedido.cliente
   */
  export type pedido$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    where?: clienteWhereInput
  }

  /**
   * pedido.feira
   */
  export type pedido$feiraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feira
     */
    select?: feiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feira
     */
    omit?: feiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feiraInclude<ExtArgs> | null
    where?: feiraWhereInput
  }

  /**
   * pedido.produto
   */
  export type pedido$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    qntd: number | null
    preco: number | null
    id_pedido: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    qntd: number | null
    preco: number | null
    id_pedido: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id_produto: string | null
    nome: string | null
    categoria: string | null
    qntd: number | null
    data_coleta: Date | null
    preco: number | null
    id_pedido: number | null
    fk_vendedor: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id_produto: string | null
    nome: string | null
    categoria: string | null
    qntd: number | null
    data_coleta: Date | null
    preco: number | null
    id_pedido: number | null
    fk_vendedor: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id_produto: number
    nome: number
    categoria: number
    qntd: number
    data_coleta: number
    preco: number
    id_pedido: number
    fk_vendedor: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    qntd?: true
    preco?: true
    id_pedido?: true
  }

  export type ProdutoSumAggregateInputType = {
    qntd?: true
    preco?: true
    id_pedido?: true
  }

  export type ProdutoMinAggregateInputType = {
    id_produto?: true
    nome?: true
    categoria?: true
    qntd?: true
    data_coleta?: true
    preco?: true
    id_pedido?: true
    fk_vendedor?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id_produto?: true
    nome?: true
    categoria?: true
    qntd?: true
    data_coleta?: true
    preco?: true
    id_pedido?: true
    fk_vendedor?: true
  }

  export type ProdutoCountAggregateInputType = {
    id_produto?: true
    nome?: true
    categoria?: true
    qntd?: true
    data_coleta?: true
    preco?: true
    id_pedido?: true
    fk_vendedor?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id_produto: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date
    preco: number
    id_pedido: number | null
    fk_vendedor: string | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produto?: boolean
    nome?: boolean
    categoria?: boolean
    qntd?: boolean
    data_coleta?: boolean
    preco?: boolean
    id_pedido?: boolean
    fk_vendedor?: boolean
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produto?: boolean
    nome?: boolean
    categoria?: boolean
    qntd?: boolean
    data_coleta?: boolean
    preco?: boolean
    id_pedido?: boolean
    fk_vendedor?: boolean
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produto?: boolean
    nome?: boolean
    categoria?: boolean
    qntd?: boolean
    data_coleta?: boolean
    preco?: boolean
    id_pedido?: boolean
    fk_vendedor?: boolean
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectScalar = {
    id_produto?: boolean
    nome?: boolean
    categoria?: boolean
    qntd?: boolean
    data_coleta?: boolean
    preco?: boolean
    id_pedido?: boolean
    fk_vendedor?: boolean
  }

  export type produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produto" | "nome" | "categoria" | "qntd" | "data_coleta" | "preco" | "id_pedido" | "fk_vendedor", ExtArgs["result"]["produto"]>
  export type produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }
  export type produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }
  export type produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | produto$vendedorArgs<ExtArgs>
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
  }

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {
      vendedor: Prisma.$vendedorPayload<ExtArgs> | null
      pedido: Prisma.$pedidoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produto: string
      nome: string
      categoria: string
      qntd: number
      data_coleta: Date
      preco: number
      id_pedido: number | null
      fk_vendedor: string | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id_produto`
     * const produtoWithId_produtoOnly = await prisma.produto.findMany({ select: { id_produto: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {produtoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id_produto`
     * const produtoWithId_produtoOnly = await prisma.produto.createManyAndReturn({
     *   select: { id_produto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {produtoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id_produto`
     * const produtoWithId_produtoOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id_produto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendedor<T extends produto$vendedorArgs<ExtArgs> = {}>(args?: Subset<T, produto$vendedorArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedido<T extends produto$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, produto$pedidoArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produto model
   */
  interface produtoFieldRefs {
    readonly id_produto: FieldRef<"produto", 'String'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly categoria: FieldRef<"produto", 'String'>
    readonly qntd: FieldRef<"produto", 'Int'>
    readonly data_coleta: FieldRef<"produto", 'DateTime'>
    readonly preco: FieldRef<"produto", 'Float'>
    readonly id_pedido: FieldRef<"produto", 'Int'>
    readonly fk_vendedor: FieldRef<"produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto createManyAndReturn
   */
  export type produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produto updateManyAndReturn
   */
  export type produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produto.vendedor
   */
  export type produto$vendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    where?: vendedorWhereInput
  }

  /**
   * produto.pedido
   */
  export type produto$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
  }


  /**
   * Model vendedor
   */

  export type AggregateVendedor = {
    _count: VendedorCountAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  export type VendedorMinAggregateOutputType = {
    nome: string | null
    telefone: string | null
    endereco_venda: string | null
    tipo_vendedor: $Enums.tipo_vendedor | null
    tipo_documento: $Enums.tipo_documento | null
    numero_documento: string | null
    id_vendedor: string | null
    fk_associacao: string | null
  }

  export type VendedorMaxAggregateOutputType = {
    nome: string | null
    telefone: string | null
    endereco_venda: string | null
    tipo_vendedor: $Enums.tipo_vendedor | null
    tipo_documento: $Enums.tipo_documento | null
    numero_documento: string | null
    id_vendedor: string | null
    fk_associacao: string | null
  }

  export type VendedorCountAggregateOutputType = {
    nome: number
    telefone: number
    endereco_venda: number
    tipo_vendedor: number
    tipo_documento: number
    numero_documento: number
    id_vendedor: number
    fk_associacao: number
    _all: number
  }


  export type VendedorMinAggregateInputType = {
    nome?: true
    telefone?: true
    endereco_venda?: true
    tipo_vendedor?: true
    tipo_documento?: true
    numero_documento?: true
    id_vendedor?: true
    fk_associacao?: true
  }

  export type VendedorMaxAggregateInputType = {
    nome?: true
    telefone?: true
    endereco_venda?: true
    tipo_vendedor?: true
    tipo_documento?: true
    numero_documento?: true
    id_vendedor?: true
    fk_associacao?: true
  }

  export type VendedorCountAggregateInputType = {
    nome?: true
    telefone?: true
    endereco_venda?: true
    tipo_vendedor?: true
    tipo_documento?: true
    numero_documento?: true
    id_vendedor?: true
    fk_associacao?: true
    _all?: true
  }

  export type VendedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedor to aggregate.
     */
    where?: vendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedors to fetch.
     */
    orderBy?: vendedorOrderByWithRelationInput | vendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendedors
    **/
    _count?: true | VendedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedorMaxAggregateInputType
  }

  export type GetVendedorAggregateType<T extends VendedorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedor[P]>
      : GetScalarType<T[P], AggregateVendedor[P]>
  }




  export type vendedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendedorWhereInput
    orderBy?: vendedorOrderByWithAggregationInput | vendedorOrderByWithAggregationInput[]
    by: VendedorScalarFieldEnum[] | VendedorScalarFieldEnum
    having?: vendedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedorCountAggregateInputType | true
    _min?: VendedorMinAggregateInputType
    _max?: VendedorMaxAggregateInputType
  }

  export type VendedorGroupByOutputType = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento: string | null
    id_vendedor: string
    fk_associacao: string | null
    _count: VendedorCountAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  type GetVendedorGroupByPayload<T extends vendedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedorGroupByOutputType[P]>
            : GetScalarType<T[P], VendedorGroupByOutputType[P]>
        }
      >
    >


  export type vendedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    telefone?: boolean
    endereco_venda?: boolean
    tipo_vendedor?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    id_vendedor?: boolean
    fk_associacao?: boolean
    atende_um?: boolean | vendedor$atende_umArgs<ExtArgs>
    produto?: boolean | vendedor$produtoArgs<ExtArgs>
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>

  export type vendedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    telefone?: boolean
    endereco_venda?: boolean
    tipo_vendedor?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    id_vendedor?: boolean
    fk_associacao?: boolean
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>

  export type vendedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    telefone?: boolean
    endereco_venda?: boolean
    tipo_vendedor?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    id_vendedor?: boolean
    fk_associacao?: boolean
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>

  export type vendedorSelectScalar = {
    nome?: boolean
    telefone?: boolean
    endereco_venda?: boolean
    tipo_vendedor?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    id_vendedor?: boolean
    fk_associacao?: boolean
  }

  export type vendedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "telefone" | "endereco_venda" | "tipo_vendedor" | "tipo_documento" | "numero_documento" | "id_vendedor" | "fk_associacao", ExtArgs["result"]["vendedor"]>
  export type vendedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atende_um?: boolean | vendedor$atende_umArgs<ExtArgs>
    produto?: boolean | vendedor$produtoArgs<ExtArgs>
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vendedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
  }
  export type vendedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associacao?: boolean | vendedor$associacaoArgs<ExtArgs>
  }

  export type $vendedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendedor"
    objects: {
      atende_um: Prisma.$atende_umPayload<ExtArgs>[]
      produto: Prisma.$produtoPayload<ExtArgs>[]
      associacao: Prisma.$associacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      telefone: string
      endereco_venda: string
      tipo_vendedor: $Enums.tipo_vendedor
      tipo_documento: $Enums.tipo_documento
      numero_documento: string | null
      id_vendedor: string
      fk_associacao: string | null
    }, ExtArgs["result"]["vendedor"]>
    composites: {}
  }

  type vendedorGetPayload<S extends boolean | null | undefined | vendedorDefaultArgs> = $Result.GetResult<Prisma.$vendedorPayload, S>

  type vendedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedorCountAggregateInputType | true
    }

  export interface vendedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendedor'], meta: { name: 'vendedor' } }
    /**
     * Find zero or one Vendedor that matches the filter.
     * @param {vendedorFindUniqueArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendedorFindUniqueArgs>(args: SelectSubset<T, vendedorFindUniqueArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendedorFindUniqueOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendedorFindUniqueOrThrowArgs>(args: SelectSubset<T, vendedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorFindFirstArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendedorFindFirstArgs>(args?: SelectSubset<T, vendedorFindFirstArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorFindFirstOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendedorFindFirstOrThrowArgs>(args?: SelectSubset<T, vendedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedors
     * const vendedors = await prisma.vendedor.findMany()
     * 
     * // Get first 10 Vendedors
     * const vendedors = await prisma.vendedor.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const vendedorWithNomeOnly = await prisma.vendedor.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends vendedorFindManyArgs>(args?: SelectSubset<T, vendedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedor.
     * @param {vendedorCreateArgs} args - Arguments to create a Vendedor.
     * @example
     * // Create one Vendedor
     * const Vendedor = await prisma.vendedor.create({
     *   data: {
     *     // ... data to create a Vendedor
     *   }
     * })
     * 
     */
    create<T extends vendedorCreateArgs>(args: SelectSubset<T, vendedorCreateArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedors.
     * @param {vendedorCreateManyArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendedorCreateManyArgs>(args?: SelectSubset<T, vendedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendedors and returns the data saved in the database.
     * @param {vendedorCreateManyAndReturnArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendedors and only return the `nome`
     * const vendedorWithNomeOnly = await prisma.vendedor.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendedorCreateManyAndReturnArgs>(args?: SelectSubset<T, vendedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendedor.
     * @param {vendedorDeleteArgs} args - Arguments to delete one Vendedor.
     * @example
     * // Delete one Vendedor
     * const Vendedor = await prisma.vendedor.delete({
     *   where: {
     *     // ... filter to delete one Vendedor
     *   }
     * })
     * 
     */
    delete<T extends vendedorDeleteArgs>(args: SelectSubset<T, vendedorDeleteArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedor.
     * @param {vendedorUpdateArgs} args - Arguments to update one Vendedor.
     * @example
     * // Update one Vendedor
     * const vendedor = await prisma.vendedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendedorUpdateArgs>(args: SelectSubset<T, vendedorUpdateArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedors.
     * @param {vendedorDeleteManyArgs} args - Arguments to filter Vendedors to delete.
     * @example
     * // Delete a few Vendedors
     * const { count } = await prisma.vendedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendedorDeleteManyArgs>(args?: SelectSubset<T, vendedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendedorUpdateManyArgs>(args: SelectSubset<T, vendedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors and returns the data updated in the database.
     * @param {vendedorUpdateManyAndReturnArgs} args - Arguments to update many Vendedors.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendedors and only return the `nome`
     * const vendedorWithNomeOnly = await prisma.vendedor.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vendedorUpdateManyAndReturnArgs>(args: SelectSubset<T, vendedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendedor.
     * @param {vendedorUpsertArgs} args - Arguments to update or create a Vendedor.
     * @example
     * // Update or create a Vendedor
     * const vendedor = await prisma.vendedor.upsert({
     *   create: {
     *     // ... data to create a Vendedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedor we want to update
     *   }
     * })
     */
    upsert<T extends vendedorUpsertArgs>(args: SelectSubset<T, vendedorUpsertArgs<ExtArgs>>): Prisma__vendedorClient<$Result.GetResult<Prisma.$vendedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorCountArgs} args - Arguments to filter Vendedors to count.
     * @example
     * // Count the number of Vendedors
     * const count = await prisma.vendedor.count({
     *   where: {
     *     // ... the filter for the Vendedors we want to count
     *   }
     * })
    **/
    count<T extends vendedorCountArgs>(
      args?: Subset<T, vendedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendedorAggregateArgs>(args: Subset<T, VendedorAggregateArgs>): Prisma.PrismaPromise<GetVendedorAggregateType<T>>

    /**
     * Group by Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vendedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendedorGroupByArgs['orderBy'] }
        : { orderBy?: vendedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vendedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendedor model
   */
  readonly fields: vendedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atende_um<T extends vendedor$atende_umArgs<ExtArgs> = {}>(args?: Subset<T, vendedor$atende_umArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atende_umPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produto<T extends vendedor$produtoArgs<ExtArgs> = {}>(args?: Subset<T, vendedor$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    associacao<T extends vendedor$associacaoArgs<ExtArgs> = {}>(args?: Subset<T, vendedor$associacaoArgs<ExtArgs>>): Prisma__associacaoClient<$Result.GetResult<Prisma.$associacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vendedor model
   */
  interface vendedorFieldRefs {
    readonly nome: FieldRef<"vendedor", 'String'>
    readonly telefone: FieldRef<"vendedor", 'String'>
    readonly endereco_venda: FieldRef<"vendedor", 'String'>
    readonly tipo_vendedor: FieldRef<"vendedor", 'tipo_vendedor'>
    readonly tipo_documento: FieldRef<"vendedor", 'tipo_documento'>
    readonly numero_documento: FieldRef<"vendedor", 'String'>
    readonly id_vendedor: FieldRef<"vendedor", 'String'>
    readonly fk_associacao: FieldRef<"vendedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vendedor findUnique
   */
  export type vendedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter, which vendedor to fetch.
     */
    where: vendedorWhereUniqueInput
  }

  /**
   * vendedor findUniqueOrThrow
   */
  export type vendedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter, which vendedor to fetch.
     */
    where: vendedorWhereUniqueInput
  }

  /**
   * vendedor findFirst
   */
  export type vendedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter, which vendedor to fetch.
     */
    where?: vendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedors to fetch.
     */
    orderBy?: vendedorOrderByWithRelationInput | vendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedors.
     */
    cursor?: vendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * vendedor findFirstOrThrow
   */
  export type vendedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter, which vendedor to fetch.
     */
    where?: vendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedors to fetch.
     */
    orderBy?: vendedorOrderByWithRelationInput | vendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedors.
     */
    cursor?: vendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * vendedor findMany
   */
  export type vendedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter, which vendedors to fetch.
     */
    where?: vendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedors to fetch.
     */
    orderBy?: vendedorOrderByWithRelationInput | vendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendedors.
     */
    cursor?: vendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedors.
     */
    skip?: number
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * vendedor create
   */
  export type vendedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * The data needed to create a vendedor.
     */
    data: XOR<vendedorCreateInput, vendedorUncheckedCreateInput>
  }

  /**
   * vendedor createMany
   */
  export type vendedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendedors.
     */
    data: vendedorCreateManyInput | vendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendedor createManyAndReturn
   */
  export type vendedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * The data used to create many vendedors.
     */
    data: vendedorCreateManyInput | vendedorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vendedor update
   */
  export type vendedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * The data needed to update a vendedor.
     */
    data: XOR<vendedorUpdateInput, vendedorUncheckedUpdateInput>
    /**
     * Choose, which vendedor to update.
     */
    where: vendedorWhereUniqueInput
  }

  /**
   * vendedor updateMany
   */
  export type vendedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendedors.
     */
    data: XOR<vendedorUpdateManyMutationInput, vendedorUncheckedUpdateManyInput>
    /**
     * Filter which vendedors to update
     */
    where?: vendedorWhereInput
    /**
     * Limit how many vendedors to update.
     */
    limit?: number
  }

  /**
   * vendedor updateManyAndReturn
   */
  export type vendedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * The data used to update vendedors.
     */
    data: XOR<vendedorUpdateManyMutationInput, vendedorUncheckedUpdateManyInput>
    /**
     * Filter which vendedors to update
     */
    where?: vendedorWhereInput
    /**
     * Limit how many vendedors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vendedor upsert
   */
  export type vendedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * The filter to search for the vendedor to update in case it exists.
     */
    where: vendedorWhereUniqueInput
    /**
     * In case the vendedor found by the `where` argument doesn't exist, create a new vendedor with this data.
     */
    create: XOR<vendedorCreateInput, vendedorUncheckedCreateInput>
    /**
     * In case the vendedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendedorUpdateInput, vendedorUncheckedUpdateInput>
  }

  /**
   * vendedor delete
   */
  export type vendedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
    /**
     * Filter which vendedor to delete.
     */
    where: vendedorWhereUniqueInput
  }

  /**
   * vendedor deleteMany
   */
  export type vendedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedors to delete
     */
    where?: vendedorWhereInput
    /**
     * Limit how many vendedors to delete.
     */
    limit?: number
  }

  /**
   * vendedor.atende_um
   */
  export type vendedor$atende_umArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atende_um
     */
    select?: atende_umSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atende_um
     */
    omit?: atende_umOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atende_umInclude<ExtArgs> | null
    where?: atende_umWhereInput
    orderBy?: atende_umOrderByWithRelationInput | atende_umOrderByWithRelationInput[]
    cursor?: atende_umWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Atende_umScalarFieldEnum | Atende_umScalarFieldEnum[]
  }

  /**
   * vendedor.produto
   */
  export type vendedor$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * vendedor.associacao
   */
  export type vendedor$associacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associacao
     */
    select?: associacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the associacao
     */
    omit?: associacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: associacaoInclude<ExtArgs> | null
    where?: associacaoWhereInput
  }

  /**
   * vendedor without action
   */
  export type vendedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedor
     */
    select?: vendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedor
     */
    omit?: vendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssociacaoScalarFieldEnum: {
    id_associacao: 'id_associacao',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type AssociacaoScalarFieldEnum = (typeof AssociacaoScalarFieldEnum)[keyof typeof AssociacaoScalarFieldEnum]


  export const Atende_umScalarFieldEnum: {
    id_pedido: 'id_pedido',
    id_vendedor: 'id_vendedor'
  };

  export type Atende_umScalarFieldEnum = (typeof Atende_umScalarFieldEnum)[keyof typeof Atende_umScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FeiraScalarFieldEnum: {
    id_feira: 'id_feira',
    nome: 'nome',
    endereco: 'endereco'
  };

  export type FeiraScalarFieldEnum = (typeof FeiraScalarFieldEnum)[keyof typeof FeiraScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    data_pedido: 'data_pedido',
    endereco_entrega: 'endereco_entrega',
    fk_feira: 'fk_feira',
    fk_cliente: 'fk_cliente'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id_produto: 'id_produto',
    nome: 'nome',
    categoria: 'categoria',
    qntd: 'qntd',
    data_coleta: 'data_coleta',
    preco: 'preco',
    id_pedido: 'id_pedido',
    fk_vendedor: 'fk_vendedor'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const VendedorScalarFieldEnum: {
    nome: 'nome',
    telefone: 'telefone',
    endereco_venda: 'endereco_venda',
    tipo_vendedor: 'tipo_vendedor',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    id_vendedor: 'id_vendedor',
    fk_associacao: 'fk_associacao'
  };

  export type VendedorScalarFieldEnum = (typeof VendedorScalarFieldEnum)[keyof typeof VendedorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'tipo_vendedor'
   */
  export type Enumtipo_vendedorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_vendedor'>
    


  /**
   * Reference to a field of type 'tipo_vendedor[]'
   */
  export type ListEnumtipo_vendedorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_vendedor[]'>
    


  /**
   * Reference to a field of type 'tipo_documento'
   */
  export type Enumtipo_documentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_documento'>
    


  /**
   * Reference to a field of type 'tipo_documento[]'
   */
  export type ListEnumtipo_documentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_documento[]'>
    
  /**
   * Deep Input Types
   */


  export type associacaoWhereInput = {
    AND?: associacaoWhereInput | associacaoWhereInput[]
    OR?: associacaoWhereInput[]
    NOT?: associacaoWhereInput | associacaoWhereInput[]
    id_associacao?: UuidFilter<"associacao"> | string
    nome?: StringFilter<"associacao"> | string
    descricao?: StringFilter<"associacao"> | string
    vendedor?: VendedorListRelationFilter
  }

  export type associacaoOrderByWithRelationInput = {
    id_associacao?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    vendedor?: vendedorOrderByRelationAggregateInput
  }

  export type associacaoWhereUniqueInput = Prisma.AtLeast<{
    id_associacao?: string
    AND?: associacaoWhereInput | associacaoWhereInput[]
    OR?: associacaoWhereInput[]
    NOT?: associacaoWhereInput | associacaoWhereInput[]
    nome?: StringFilter<"associacao"> | string
    descricao?: StringFilter<"associacao"> | string
    vendedor?: VendedorListRelationFilter
  }, "id_associacao">

  export type associacaoOrderByWithAggregationInput = {
    id_associacao?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: associacaoCountOrderByAggregateInput
    _max?: associacaoMaxOrderByAggregateInput
    _min?: associacaoMinOrderByAggregateInput
  }

  export type associacaoScalarWhereWithAggregatesInput = {
    AND?: associacaoScalarWhereWithAggregatesInput | associacaoScalarWhereWithAggregatesInput[]
    OR?: associacaoScalarWhereWithAggregatesInput[]
    NOT?: associacaoScalarWhereWithAggregatesInput | associacaoScalarWhereWithAggregatesInput[]
    id_associacao?: UuidWithAggregatesFilter<"associacao"> | string
    nome?: StringWithAggregatesFilter<"associacao"> | string
    descricao?: StringWithAggregatesFilter<"associacao"> | string
  }

  export type atende_umWhereInput = {
    AND?: atende_umWhereInput | atende_umWhereInput[]
    OR?: atende_umWhereInput[]
    NOT?: atende_umWhereInput | atende_umWhereInput[]
    id_pedido?: IntFilter<"atende_um"> | number
    id_vendedor?: UuidFilter<"atende_um"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    vendedor?: XOR<VendedorScalarRelationFilter, vendedorWhereInput>
  }

  export type atende_umOrderByWithRelationInput = {
    id_pedido?: SortOrder
    id_vendedor?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    vendedor?: vendedorOrderByWithRelationInput
  }

  export type atende_umWhereUniqueInput = Prisma.AtLeast<{
    id_pedido_id_vendedor?: atende_umId_pedidoId_vendedorCompoundUniqueInput
    AND?: atende_umWhereInput | atende_umWhereInput[]
    OR?: atende_umWhereInput[]
    NOT?: atende_umWhereInput | atende_umWhereInput[]
    id_pedido?: IntFilter<"atende_um"> | number
    id_vendedor?: UuidFilter<"atende_um"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    vendedor?: XOR<VendedorScalarRelationFilter, vendedorWhereInput>
  }, "id_pedido_id_vendedor">

  export type atende_umOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    id_vendedor?: SortOrder
    _count?: atende_umCountOrderByAggregateInput
    _avg?: atende_umAvgOrderByAggregateInput
    _max?: atende_umMaxOrderByAggregateInput
    _min?: atende_umMinOrderByAggregateInput
    _sum?: atende_umSumOrderByAggregateInput
  }

  export type atende_umScalarWhereWithAggregatesInput = {
    AND?: atende_umScalarWhereWithAggregatesInput | atende_umScalarWhereWithAggregatesInput[]
    OR?: atende_umScalarWhereWithAggregatesInput[]
    NOT?: atende_umScalarWhereWithAggregatesInput | atende_umScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"atende_um"> | number
    id_vendedor?: UuidWithAggregatesFilter<"atende_um"> | string
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    cpf?: StringFilter<"cliente"> | string
    nome?: StringFilter<"cliente"> | string
    email?: StringFilter<"cliente"> | string
    telefone?: StringFilter<"cliente"> | string
    pedido?: PedidoListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    email?: StringFilter<"cliente"> | string
    telefone?: StringFilter<"cliente"> | string
    pedido?: PedidoListRelationFilter
  }, "cpf">

  export type clienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    _count?: clienteCountOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"cliente"> | string
    nome?: StringWithAggregatesFilter<"cliente"> | string
    email?: StringWithAggregatesFilter<"cliente"> | string
    telefone?: StringWithAggregatesFilter<"cliente"> | string
  }

  export type feiraWhereInput = {
    AND?: feiraWhereInput | feiraWhereInput[]
    OR?: feiraWhereInput[]
    NOT?: feiraWhereInput | feiraWhereInput[]
    id_feira?: IntFilter<"feira"> | number
    nome?: StringFilter<"feira"> | string
    endereco?: StringFilter<"feira"> | string
    pedido?: PedidoListRelationFilter
  }

  export type feiraOrderByWithRelationInput = {
    id_feira?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
  }

  export type feiraWhereUniqueInput = Prisma.AtLeast<{
    id_feira?: number
    AND?: feiraWhereInput | feiraWhereInput[]
    OR?: feiraWhereInput[]
    NOT?: feiraWhereInput | feiraWhereInput[]
    nome?: StringFilter<"feira"> | string
    endereco?: StringFilter<"feira"> | string
    pedido?: PedidoListRelationFilter
  }, "id_feira">

  export type feiraOrderByWithAggregationInput = {
    id_feira?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    _count?: feiraCountOrderByAggregateInput
    _avg?: feiraAvgOrderByAggregateInput
    _max?: feiraMaxOrderByAggregateInput
    _min?: feiraMinOrderByAggregateInput
    _sum?: feiraSumOrderByAggregateInput
  }

  export type feiraScalarWhereWithAggregatesInput = {
    AND?: feiraScalarWhereWithAggregatesInput | feiraScalarWhereWithAggregatesInput[]
    OR?: feiraScalarWhereWithAggregatesInput[]
    NOT?: feiraScalarWhereWithAggregatesInput | feiraScalarWhereWithAggregatesInput[]
    id_feira?: IntWithAggregatesFilter<"feira"> | number
    nome?: StringWithAggregatesFilter<"feira"> | string
    endereco?: StringWithAggregatesFilter<"feira"> | string
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    pedido_id?: IntFilter<"pedido"> | number
    data_pedido?: DateTimeFilter<"pedido"> | Date | string
    endereco_entrega?: StringFilter<"pedido"> | string
    fk_feira?: IntNullableFilter<"pedido"> | number | null
    fk_cliente?: StringNullableFilter<"pedido"> | string | null
    atende_um?: Atende_umListRelationFilter
    cliente?: XOR<ClienteNullableScalarRelationFilter, clienteWhereInput> | null
    feira?: XOR<FeiraNullableScalarRelationFilter, feiraWhereInput> | null
    produto?: ProdutoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    data_pedido?: SortOrder
    endereco_entrega?: SortOrder
    fk_feira?: SortOrderInput | SortOrder
    fk_cliente?: SortOrderInput | SortOrder
    atende_um?: atende_umOrderByRelationAggregateInput
    cliente?: clienteOrderByWithRelationInput
    feira?: feiraOrderByWithRelationInput
    produto?: produtoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    data_pedido?: DateTimeFilter<"pedido"> | Date | string
    endereco_entrega?: StringFilter<"pedido"> | string
    fk_feira?: IntNullableFilter<"pedido"> | number | null
    fk_cliente?: StringNullableFilter<"pedido"> | string | null
    atende_um?: Atende_umListRelationFilter
    cliente?: XOR<ClienteNullableScalarRelationFilter, clienteWhereInput> | null
    feira?: XOR<FeiraNullableScalarRelationFilter, feiraWhereInput> | null
    produto?: ProdutoListRelationFilter
  }, "pedido_id">

  export type pedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    data_pedido?: SortOrder
    endereco_entrega?: SortOrder
    fk_feira?: SortOrderInput | SortOrder
    fk_cliente?: SortOrderInput | SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"pedido"> | number
    data_pedido?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    endereco_entrega?: StringWithAggregatesFilter<"pedido"> | string
    fk_feira?: IntNullableWithAggregatesFilter<"pedido"> | number | null
    fk_cliente?: StringNullableWithAggregatesFilter<"pedido"> | string | null
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id_produto?: UuidFilter<"produto"> | string
    nome?: StringFilter<"produto"> | string
    categoria?: StringFilter<"produto"> | string
    qntd?: IntFilter<"produto"> | number
    data_coleta?: DateTimeFilter<"produto"> | Date | string
    preco?: FloatFilter<"produto"> | number
    id_pedido?: IntNullableFilter<"produto"> | number | null
    fk_vendedor?: UuidNullableFilter<"produto"> | string | null
    vendedor?: XOR<VendedorNullableScalarRelationFilter, vendedorWhereInput> | null
    pedido?: XOR<PedidoNullableScalarRelationFilter, pedidoWhereInput> | null
  }

  export type produtoOrderByWithRelationInput = {
    id_produto?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    qntd?: SortOrder
    data_coleta?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrderInput | SortOrder
    fk_vendedor?: SortOrderInput | SortOrder
    vendedor?: vendedorOrderByWithRelationInput
    pedido?: pedidoOrderByWithRelationInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    id_produto?: string
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    nome?: StringFilter<"produto"> | string
    categoria?: StringFilter<"produto"> | string
    qntd?: IntFilter<"produto"> | number
    data_coleta?: DateTimeFilter<"produto"> | Date | string
    preco?: FloatFilter<"produto"> | number
    id_pedido?: IntNullableFilter<"produto"> | number | null
    fk_vendedor?: UuidNullableFilter<"produto"> | string | null
    vendedor?: XOR<VendedorNullableScalarRelationFilter, vendedorWhereInput> | null
    pedido?: XOR<PedidoNullableScalarRelationFilter, pedidoWhereInput> | null
  }, "id_produto">

  export type produtoOrderByWithAggregationInput = {
    id_produto?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    qntd?: SortOrder
    data_coleta?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrderInput | SortOrder
    fk_vendedor?: SortOrderInput | SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    id_produto?: UuidWithAggregatesFilter<"produto"> | string
    nome?: StringWithAggregatesFilter<"produto"> | string
    categoria?: StringWithAggregatesFilter<"produto"> | string
    qntd?: IntWithAggregatesFilter<"produto"> | number
    data_coleta?: DateTimeWithAggregatesFilter<"produto"> | Date | string
    preco?: FloatWithAggregatesFilter<"produto"> | number
    id_pedido?: IntNullableWithAggregatesFilter<"produto"> | number | null
    fk_vendedor?: UuidNullableWithAggregatesFilter<"produto"> | string | null
  }

  export type vendedorWhereInput = {
    AND?: vendedorWhereInput | vendedorWhereInput[]
    OR?: vendedorWhereInput[]
    NOT?: vendedorWhereInput | vendedorWhereInput[]
    nome?: StringFilter<"vendedor"> | string
    telefone?: StringFilter<"vendedor"> | string
    endereco_venda?: StringFilter<"vendedor"> | string
    tipo_vendedor?: Enumtipo_vendedorFilter<"vendedor"> | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFilter<"vendedor"> | $Enums.tipo_documento
    numero_documento?: StringNullableFilter<"vendedor"> | string | null
    id_vendedor?: UuidFilter<"vendedor"> | string
    fk_associacao?: UuidNullableFilter<"vendedor"> | string | null
    atende_um?: Atende_umListRelationFilter
    produto?: ProdutoListRelationFilter
    associacao?: XOR<AssociacaoNullableScalarRelationFilter, associacaoWhereInput> | null
  }

  export type vendedorOrderByWithRelationInput = {
    nome?: SortOrder
    telefone?: SortOrder
    endereco_venda?: SortOrder
    tipo_vendedor?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrderInput | SortOrder
    id_vendedor?: SortOrder
    fk_associacao?: SortOrderInput | SortOrder
    atende_um?: atende_umOrderByRelationAggregateInput
    produto?: produtoOrderByRelationAggregateInput
    associacao?: associacaoOrderByWithRelationInput
  }

  export type vendedorWhereUniqueInput = Prisma.AtLeast<{
    id_vendedor?: string
    AND?: vendedorWhereInput | vendedorWhereInput[]
    OR?: vendedorWhereInput[]
    NOT?: vendedorWhereInput | vendedorWhereInput[]
    nome?: StringFilter<"vendedor"> | string
    telefone?: StringFilter<"vendedor"> | string
    endereco_venda?: StringFilter<"vendedor"> | string
    tipo_vendedor?: Enumtipo_vendedorFilter<"vendedor"> | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFilter<"vendedor"> | $Enums.tipo_documento
    numero_documento?: StringNullableFilter<"vendedor"> | string | null
    fk_associacao?: UuidNullableFilter<"vendedor"> | string | null
    atende_um?: Atende_umListRelationFilter
    produto?: ProdutoListRelationFilter
    associacao?: XOR<AssociacaoNullableScalarRelationFilter, associacaoWhereInput> | null
  }, "id_vendedor">

  export type vendedorOrderByWithAggregationInput = {
    nome?: SortOrder
    telefone?: SortOrder
    endereco_venda?: SortOrder
    tipo_vendedor?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrderInput | SortOrder
    id_vendedor?: SortOrder
    fk_associacao?: SortOrderInput | SortOrder
    _count?: vendedorCountOrderByAggregateInput
    _max?: vendedorMaxOrderByAggregateInput
    _min?: vendedorMinOrderByAggregateInput
  }

  export type vendedorScalarWhereWithAggregatesInput = {
    AND?: vendedorScalarWhereWithAggregatesInput | vendedorScalarWhereWithAggregatesInput[]
    OR?: vendedorScalarWhereWithAggregatesInput[]
    NOT?: vendedorScalarWhereWithAggregatesInput | vendedorScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"vendedor"> | string
    telefone?: StringWithAggregatesFilter<"vendedor"> | string
    endereco_venda?: StringWithAggregatesFilter<"vendedor"> | string
    tipo_vendedor?: Enumtipo_vendedorWithAggregatesFilter<"vendedor"> | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoWithAggregatesFilter<"vendedor"> | $Enums.tipo_documento
    numero_documento?: StringNullableWithAggregatesFilter<"vendedor"> | string | null
    id_vendedor?: UuidWithAggregatesFilter<"vendedor"> | string
    fk_associacao?: UuidNullableWithAggregatesFilter<"vendedor"> | string | null
  }

  export type associacaoCreateInput = {
    id_associacao?: string
    nome: string
    descricao: string
    vendedor?: vendedorCreateNestedManyWithoutAssociacaoInput
  }

  export type associacaoUncheckedCreateInput = {
    id_associacao?: string
    nome: string
    descricao: string
    vendedor?: vendedorUncheckedCreateNestedManyWithoutAssociacaoInput
  }

  export type associacaoUpdateInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    vendedor?: vendedorUpdateManyWithoutAssociacaoNestedInput
  }

  export type associacaoUncheckedUpdateInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    vendedor?: vendedorUncheckedUpdateManyWithoutAssociacaoNestedInput
  }

  export type associacaoCreateManyInput = {
    id_associacao?: string
    nome: string
    descricao: string
  }

  export type associacaoUpdateManyMutationInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type associacaoUncheckedUpdateManyInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type atende_umCreateInput = {
    pedido: pedidoCreateNestedOneWithoutAtende_umInput
    vendedor: vendedorCreateNestedOneWithoutAtende_umInput
  }

  export type atende_umUncheckedCreateInput = {
    id_pedido: number
    id_vendedor: string
  }

  export type atende_umUpdateInput = {
    pedido?: pedidoUpdateOneRequiredWithoutAtende_umNestedInput
    vendedor?: vendedorUpdateOneRequiredWithoutAtende_umNestedInput
  }

  export type atende_umUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type atende_umCreateManyInput = {
    id_pedido: number
    id_vendedor: string
  }

  export type atende_umUpdateManyMutationInput = {

  }

  export type atende_umUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type clienteCreateInput = {
    cpf: string
    nome: string
    email: string
    telefone: string
    pedido?: pedidoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    cpf: string
    nome: string
    email: string
    telefone: string
    pedido?: pedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    cpf: string
    nome: string
    email: string
    telefone: string
  }

  export type clienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type feiraCreateInput = {
    nome: string
    endereco: string
    pedido?: pedidoCreateNestedManyWithoutFeiraInput
  }

  export type feiraUncheckedCreateInput = {
    id_feira?: number
    nome: string
    endereco: string
    pedido?: pedidoUncheckedCreateNestedManyWithoutFeiraInput
  }

  export type feiraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateManyWithoutFeiraNestedInput
  }

  export type feiraUncheckedUpdateInput = {
    id_feira?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUncheckedUpdateManyWithoutFeiraNestedInput
  }

  export type feiraCreateManyInput = {
    id_feira?: number
    nome: string
    endereco: string
  }

  export type feiraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type feiraUncheckedUpdateManyInput = {
    id_feira?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoCreateInput = {
    data_pedido?: Date | string
    endereco_entrega: string
    atende_um?: atende_umCreateNestedManyWithoutPedidoInput
    cliente?: clienteCreateNestedOneWithoutPedidoInput
    feira?: feiraCreateNestedOneWithoutPedidoInput
    produto?: produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
    fk_cliente?: string | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutPedidoInput
    produto?: produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
    feira?: feiraUpdateOneWithoutPedidoNestedInput
    produto?: produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    atende_um?: atende_umUncheckedUpdateManyWithoutPedidoNestedInput
    produto?: produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
    fk_cliente?: string | null
  }

  export type pedidoUpdateManyMutationInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoCreateInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    vendedor?: vendedorCreateNestedOneWithoutProdutoInput
    pedido?: pedidoCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    id_pedido?: number | null
    fk_vendedor?: string | null
  }

  export type produtoUpdateInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    vendedor?: vendedorUpdateOneWithoutProdutoNestedInput
    pedido?: pedidoUpdateOneWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    fk_vendedor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoCreateManyInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    id_pedido?: number | null
    fk_vendedor?: string | null
  }

  export type produtoUpdateManyMutationInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type produtoUncheckedUpdateManyInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    fk_vendedor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vendedorCreateInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    atende_um?: atende_umCreateNestedManyWithoutVendedorInput
    produto?: produtoCreateNestedManyWithoutVendedorInput
    associacao?: associacaoCreateNestedOneWithoutVendedorInput
  }

  export type vendedorUncheckedCreateInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    fk_associacao?: string | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutVendedorInput
    produto?: produtoUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type vendedorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutVendedorNestedInput
    produto?: produtoUpdateManyWithoutVendedorNestedInput
    associacao?: associacaoUpdateOneWithoutVendedorNestedInput
  }

  export type vendedorUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    fk_associacao?: NullableStringFieldUpdateOperationsInput | string | null
    atende_um?: atende_umUncheckedUpdateManyWithoutVendedorNestedInput
    produto?: produtoUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type vendedorCreateManyInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    fk_associacao?: string | null
  }

  export type vendedorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type vendedorUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    fk_associacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VendedorListRelationFilter = {
    every?: vendedorWhereInput
    some?: vendedorWhereInput
    none?: vendedorWhereInput
  }

  export type vendedorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type associacaoCountOrderByAggregateInput = {
    id_associacao?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type associacaoMaxOrderByAggregateInput = {
    id_associacao?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type associacaoMinOrderByAggregateInput = {
    id_associacao?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type VendedorScalarRelationFilter = {
    is?: vendedorWhereInput
    isNot?: vendedorWhereInput
  }

  export type atende_umId_pedidoId_vendedorCompoundUniqueInput = {
    id_pedido: number
    id_vendedor: string
  }

  export type atende_umCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_vendedor?: SortOrder
  }

  export type atende_umAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type atende_umMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_vendedor?: SortOrder
  }

  export type atende_umMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_vendedor?: SortOrder
  }

  export type atende_umSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type feiraCountOrderByAggregateInput = {
    id_feira?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type feiraAvgOrderByAggregateInput = {
    id_feira?: SortOrder
  }

  export type feiraMaxOrderByAggregateInput = {
    id_feira?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type feiraMinOrderByAggregateInput = {
    id_feira?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type feiraSumOrderByAggregateInput = {
    id_feira?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Atende_umListRelationFilter = {
    every?: atende_umWhereInput
    some?: atende_umWhereInput
    none?: atende_umWhereInput
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: clienteWhereInput | null
    isNot?: clienteWhereInput | null
  }

  export type FeiraNullableScalarRelationFilter = {
    is?: feiraWhereInput | null
    isNot?: feiraWhereInput | null
  }

  export type ProdutoListRelationFilter = {
    every?: produtoWhereInput
    some?: produtoWhereInput
    none?: produtoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type atende_umOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    data_pedido?: SortOrder
    endereco_entrega?: SortOrder
    fk_feira?: SortOrder
    fk_cliente?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    fk_feira?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    data_pedido?: SortOrder
    endereco_entrega?: SortOrder
    fk_feira?: SortOrder
    fk_cliente?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    data_pedido?: SortOrder
    endereco_entrega?: SortOrder
    fk_feira?: SortOrder
    fk_cliente?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    fk_feira?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type VendedorNullableScalarRelationFilter = {
    is?: vendedorWhereInput | null
    isNot?: vendedorWhereInput | null
  }

  export type PedidoNullableScalarRelationFilter = {
    is?: pedidoWhereInput | null
    isNot?: pedidoWhereInput | null
  }

  export type produtoCountOrderByAggregateInput = {
    id_produto?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    qntd?: SortOrder
    data_coleta?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrder
    fk_vendedor?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    qntd?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    id_produto?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    qntd?: SortOrder
    data_coleta?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrder
    fk_vendedor?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    id_produto?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    qntd?: SortOrder
    data_coleta?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrder
    fk_vendedor?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    qntd?: SortOrder
    preco?: SortOrder
    id_pedido?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumtipo_vendedorFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_vendedor | Enumtipo_vendedorFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_vendedorFilter<$PrismaModel> | $Enums.tipo_vendedor
  }

  export type Enumtipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_documento | Enumtipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_documentoFilter<$PrismaModel> | $Enums.tipo_documento
  }

  export type AssociacaoNullableScalarRelationFilter = {
    is?: associacaoWhereInput | null
    isNot?: associacaoWhereInput | null
  }

  export type vendedorCountOrderByAggregateInput = {
    nome?: SortOrder
    telefone?: SortOrder
    endereco_venda?: SortOrder
    tipo_vendedor?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    id_vendedor?: SortOrder
    fk_associacao?: SortOrder
  }

  export type vendedorMaxOrderByAggregateInput = {
    nome?: SortOrder
    telefone?: SortOrder
    endereco_venda?: SortOrder
    tipo_vendedor?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    id_vendedor?: SortOrder
    fk_associacao?: SortOrder
  }

  export type vendedorMinOrderByAggregateInput = {
    nome?: SortOrder
    telefone?: SortOrder
    endereco_venda?: SortOrder
    tipo_vendedor?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    id_vendedor?: SortOrder
    fk_associacao?: SortOrder
  }

  export type Enumtipo_vendedorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_vendedor | Enumtipo_vendedorFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_vendedorWithAggregatesFilter<$PrismaModel> | $Enums.tipo_vendedor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_vendedorFilter<$PrismaModel>
    _max?: NestedEnumtipo_vendedorFilter<$PrismaModel>
  }

  export type Enumtipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_documento | Enumtipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumtipo_documentoFilter<$PrismaModel>
  }

  export type vendedorCreateNestedManyWithoutAssociacaoInput = {
    create?: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput> | vendedorCreateWithoutAssociacaoInput[] | vendedorUncheckedCreateWithoutAssociacaoInput[]
    connectOrCreate?: vendedorCreateOrConnectWithoutAssociacaoInput | vendedorCreateOrConnectWithoutAssociacaoInput[]
    createMany?: vendedorCreateManyAssociacaoInputEnvelope
    connect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
  }

  export type vendedorUncheckedCreateNestedManyWithoutAssociacaoInput = {
    create?: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput> | vendedorCreateWithoutAssociacaoInput[] | vendedorUncheckedCreateWithoutAssociacaoInput[]
    connectOrCreate?: vendedorCreateOrConnectWithoutAssociacaoInput | vendedorCreateOrConnectWithoutAssociacaoInput[]
    createMany?: vendedorCreateManyAssociacaoInputEnvelope
    connect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type vendedorUpdateManyWithoutAssociacaoNestedInput = {
    create?: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput> | vendedorCreateWithoutAssociacaoInput[] | vendedorUncheckedCreateWithoutAssociacaoInput[]
    connectOrCreate?: vendedorCreateOrConnectWithoutAssociacaoInput | vendedorCreateOrConnectWithoutAssociacaoInput[]
    upsert?: vendedorUpsertWithWhereUniqueWithoutAssociacaoInput | vendedorUpsertWithWhereUniqueWithoutAssociacaoInput[]
    createMany?: vendedorCreateManyAssociacaoInputEnvelope
    set?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    disconnect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    delete?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    connect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    update?: vendedorUpdateWithWhereUniqueWithoutAssociacaoInput | vendedorUpdateWithWhereUniqueWithoutAssociacaoInput[]
    updateMany?: vendedorUpdateManyWithWhereWithoutAssociacaoInput | vendedorUpdateManyWithWhereWithoutAssociacaoInput[]
    deleteMany?: vendedorScalarWhereInput | vendedorScalarWhereInput[]
  }

  export type vendedorUncheckedUpdateManyWithoutAssociacaoNestedInput = {
    create?: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput> | vendedorCreateWithoutAssociacaoInput[] | vendedorUncheckedCreateWithoutAssociacaoInput[]
    connectOrCreate?: vendedorCreateOrConnectWithoutAssociacaoInput | vendedorCreateOrConnectWithoutAssociacaoInput[]
    upsert?: vendedorUpsertWithWhereUniqueWithoutAssociacaoInput | vendedorUpsertWithWhereUniqueWithoutAssociacaoInput[]
    createMany?: vendedorCreateManyAssociacaoInputEnvelope
    set?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    disconnect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    delete?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    connect?: vendedorWhereUniqueInput | vendedorWhereUniqueInput[]
    update?: vendedorUpdateWithWhereUniqueWithoutAssociacaoInput | vendedorUpdateWithWhereUniqueWithoutAssociacaoInput[]
    updateMany?: vendedorUpdateManyWithWhereWithoutAssociacaoInput | vendedorUpdateManyWithWhereWithoutAssociacaoInput[]
    deleteMany?: vendedorScalarWhereInput | vendedorScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutAtende_umInput = {
    create?: XOR<pedidoCreateWithoutAtende_umInput, pedidoUncheckedCreateWithoutAtende_umInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutAtende_umInput
    connect?: pedidoWhereUniqueInput
  }

  export type vendedorCreateNestedOneWithoutAtende_umInput = {
    create?: XOR<vendedorCreateWithoutAtende_umInput, vendedorUncheckedCreateWithoutAtende_umInput>
    connectOrCreate?: vendedorCreateOrConnectWithoutAtende_umInput
    connect?: vendedorWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutAtende_umNestedInput = {
    create?: XOR<pedidoCreateWithoutAtende_umInput, pedidoUncheckedCreateWithoutAtende_umInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutAtende_umInput
    upsert?: pedidoUpsertWithoutAtende_umInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutAtende_umInput, pedidoUpdateWithoutAtende_umInput>, pedidoUncheckedUpdateWithoutAtende_umInput>
  }

  export type vendedorUpdateOneRequiredWithoutAtende_umNestedInput = {
    create?: XOR<vendedorCreateWithoutAtende_umInput, vendedorUncheckedCreateWithoutAtende_umInput>
    connectOrCreate?: vendedorCreateOrConnectWithoutAtende_umInput
    upsert?: vendedorUpsertWithoutAtende_umInput
    connect?: vendedorWhereUniqueInput
    update?: XOR<XOR<vendedorUpdateToOneWithWhereWithoutAtende_umInput, vendedorUpdateWithoutAtende_umInput>, vendedorUncheckedUpdateWithoutAtende_umInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedManyWithoutFeiraInput = {
    create?: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput> | pedidoCreateWithoutFeiraInput[] | pedidoUncheckedCreateWithoutFeiraInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutFeiraInput | pedidoCreateOrConnectWithoutFeiraInput[]
    createMany?: pedidoCreateManyFeiraInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutFeiraInput = {
    create?: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput> | pedidoCreateWithoutFeiraInput[] | pedidoUncheckedCreateWithoutFeiraInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutFeiraInput | pedidoCreateOrConnectWithoutFeiraInput[]
    createMany?: pedidoCreateManyFeiraInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUpdateManyWithoutFeiraNestedInput = {
    create?: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput> | pedidoCreateWithoutFeiraInput[] | pedidoUncheckedCreateWithoutFeiraInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutFeiraInput | pedidoCreateOrConnectWithoutFeiraInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutFeiraInput | pedidoUpsertWithWhereUniqueWithoutFeiraInput[]
    createMany?: pedidoCreateManyFeiraInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutFeiraInput | pedidoUpdateWithWhereUniqueWithoutFeiraInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutFeiraInput | pedidoUpdateManyWithWhereWithoutFeiraInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutFeiraNestedInput = {
    create?: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput> | pedidoCreateWithoutFeiraInput[] | pedidoUncheckedCreateWithoutFeiraInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutFeiraInput | pedidoCreateOrConnectWithoutFeiraInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutFeiraInput | pedidoUpsertWithWhereUniqueWithoutFeiraInput[]
    createMany?: pedidoCreateManyFeiraInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutFeiraInput | pedidoUpdateWithWhereUniqueWithoutFeiraInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutFeiraInput | pedidoUpdateManyWithWhereWithoutFeiraInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type atende_umCreateNestedManyWithoutPedidoInput = {
    create?: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput> | atende_umCreateWithoutPedidoInput[] | atende_umUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutPedidoInput | atende_umCreateOrConnectWithoutPedidoInput[]
    createMany?: atende_umCreateManyPedidoInputEnvelope
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
  }

  export type clienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    connect?: clienteWhereUniqueInput
  }

  export type feiraCreateNestedOneWithoutPedidoInput = {
    create?: XOR<feiraCreateWithoutPedidoInput, feiraUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: feiraCreateOrConnectWithoutPedidoInput
    connect?: feiraWhereUniqueInput
  }

  export type produtoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput> | produtoCreateWithoutPedidoInput[] | produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput | produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: produtoCreateManyPedidoInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type atende_umUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput> | atende_umCreateWithoutPedidoInput[] | atende_umUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutPedidoInput | atende_umCreateOrConnectWithoutPedidoInput[]
    createMany?: atende_umCreateManyPedidoInputEnvelope
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput> | produtoCreateWithoutPedidoInput[] | produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput | produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: produtoCreateManyPedidoInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type atende_umUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput> | atende_umCreateWithoutPedidoInput[] | atende_umUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutPedidoInput | atende_umCreateOrConnectWithoutPedidoInput[]
    upsert?: atende_umUpsertWithWhereUniqueWithoutPedidoInput | atende_umUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: atende_umCreateManyPedidoInputEnvelope
    set?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    disconnect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    delete?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    update?: atende_umUpdateWithWhereUniqueWithoutPedidoInput | atende_umUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: atende_umUpdateManyWithWhereWithoutPedidoInput | atende_umUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
  }

  export type clienteUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    upsert?: clienteUpsertWithoutPedidoInput
    disconnect?: clienteWhereInput | boolean
    delete?: clienteWhereInput | boolean
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutPedidoInput, clienteUpdateWithoutPedidoInput>, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type feiraUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<feiraCreateWithoutPedidoInput, feiraUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: feiraCreateOrConnectWithoutPedidoInput
    upsert?: feiraUpsertWithoutPedidoInput
    disconnect?: feiraWhereInput | boolean
    delete?: feiraWhereInput | boolean
    connect?: feiraWhereUniqueInput
    update?: XOR<XOR<feiraUpdateToOneWithWhereWithoutPedidoInput, feiraUpdateWithoutPedidoInput>, feiraUncheckedUpdateWithoutPedidoInput>
  }

  export type produtoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput> | produtoCreateWithoutPedidoInput[] | produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput | produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutPedidoInput | produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: produtoCreateManyPedidoInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutPedidoInput | produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutPedidoInput | produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type atende_umUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput> | atende_umCreateWithoutPedidoInput[] | atende_umUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutPedidoInput | atende_umCreateOrConnectWithoutPedidoInput[]
    upsert?: atende_umUpsertWithWhereUniqueWithoutPedidoInput | atende_umUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: atende_umCreateManyPedidoInputEnvelope
    set?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    disconnect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    delete?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    update?: atende_umUpdateWithWhereUniqueWithoutPedidoInput | atende_umUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: atende_umUpdateManyWithWhereWithoutPedidoInput | atende_umUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput> | produtoCreateWithoutPedidoInput[] | produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput | produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutPedidoInput | produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: produtoCreateManyPedidoInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutPedidoInput | produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutPedidoInput | produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type vendedorCreateNestedOneWithoutProdutoInput = {
    create?: XOR<vendedorCreateWithoutProdutoInput, vendedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: vendedorCreateOrConnectWithoutProdutoInput
    connect?: vendedorWhereUniqueInput
  }

  export type pedidoCreateNestedOneWithoutProdutoInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput
    connect?: pedidoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type vendedorUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<vendedorCreateWithoutProdutoInput, vendedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: vendedorCreateOrConnectWithoutProdutoInput
    upsert?: vendedorUpsertWithoutProdutoInput
    disconnect?: vendedorWhereInput | boolean
    delete?: vendedorWhereInput | boolean
    connect?: vendedorWhereUniqueInput
    update?: XOR<XOR<vendedorUpdateToOneWithWhereWithoutProdutoInput, vendedorUpdateWithoutProdutoInput>, vendedorUncheckedUpdateWithoutProdutoInput>
  }

  export type pedidoUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput
    upsert?: pedidoUpsertWithoutProdutoInput
    disconnect?: pedidoWhereInput | boolean
    delete?: pedidoWhereInput | boolean
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutProdutoInput, pedidoUpdateWithoutProdutoInput>, pedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type atende_umCreateNestedManyWithoutVendedorInput = {
    create?: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput> | atende_umCreateWithoutVendedorInput[] | atende_umUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutVendedorInput | atende_umCreateOrConnectWithoutVendedorInput[]
    createMany?: atende_umCreateManyVendedorInputEnvelope
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
  }

  export type produtoCreateNestedManyWithoutVendedorInput = {
    create?: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput> | produtoCreateWithoutVendedorInput[] | produtoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutVendedorInput | produtoCreateOrConnectWithoutVendedorInput[]
    createMany?: produtoCreateManyVendedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type associacaoCreateNestedOneWithoutVendedorInput = {
    create?: XOR<associacaoCreateWithoutVendedorInput, associacaoUncheckedCreateWithoutVendedorInput>
    connectOrCreate?: associacaoCreateOrConnectWithoutVendedorInput
    connect?: associacaoWhereUniqueInput
  }

  export type atende_umUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput> | atende_umCreateWithoutVendedorInput[] | atende_umUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutVendedorInput | atende_umCreateOrConnectWithoutVendedorInput[]
    createMany?: atende_umCreateManyVendedorInputEnvelope
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput> | produtoCreateWithoutVendedorInput[] | produtoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutVendedorInput | produtoCreateOrConnectWithoutVendedorInput[]
    createMany?: produtoCreateManyVendedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type Enumtipo_vendedorFieldUpdateOperationsInput = {
    set?: $Enums.tipo_vendedor
  }

  export type Enumtipo_documentoFieldUpdateOperationsInput = {
    set?: $Enums.tipo_documento
  }

  export type atende_umUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput> | atende_umCreateWithoutVendedorInput[] | atende_umUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutVendedorInput | atende_umCreateOrConnectWithoutVendedorInput[]
    upsert?: atende_umUpsertWithWhereUniqueWithoutVendedorInput | atende_umUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: atende_umCreateManyVendedorInputEnvelope
    set?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    disconnect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    delete?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    update?: atende_umUpdateWithWhereUniqueWithoutVendedorInput | atende_umUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: atende_umUpdateManyWithWhereWithoutVendedorInput | atende_umUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
  }

  export type produtoUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput> | produtoCreateWithoutVendedorInput[] | produtoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutVendedorInput | produtoCreateOrConnectWithoutVendedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutVendedorInput | produtoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: produtoCreateManyVendedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutVendedorInput | produtoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutVendedorInput | produtoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type associacaoUpdateOneWithoutVendedorNestedInput = {
    create?: XOR<associacaoCreateWithoutVendedorInput, associacaoUncheckedCreateWithoutVendedorInput>
    connectOrCreate?: associacaoCreateOrConnectWithoutVendedorInput
    upsert?: associacaoUpsertWithoutVendedorInput
    disconnect?: associacaoWhereInput | boolean
    delete?: associacaoWhereInput | boolean
    connect?: associacaoWhereUniqueInput
    update?: XOR<XOR<associacaoUpdateToOneWithWhereWithoutVendedorInput, associacaoUpdateWithoutVendedorInput>, associacaoUncheckedUpdateWithoutVendedorInput>
  }

  export type atende_umUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput> | atende_umCreateWithoutVendedorInput[] | atende_umUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: atende_umCreateOrConnectWithoutVendedorInput | atende_umCreateOrConnectWithoutVendedorInput[]
    upsert?: atende_umUpsertWithWhereUniqueWithoutVendedorInput | atende_umUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: atende_umCreateManyVendedorInputEnvelope
    set?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    disconnect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    delete?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    connect?: atende_umWhereUniqueInput | atende_umWhereUniqueInput[]
    update?: atende_umUpdateWithWhereUniqueWithoutVendedorInput | atende_umUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: atende_umUpdateManyWithWhereWithoutVendedorInput | atende_umUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput> | produtoCreateWithoutVendedorInput[] | produtoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutVendedorInput | produtoCreateOrConnectWithoutVendedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutVendedorInput | produtoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: produtoCreateManyVendedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutVendedorInput | produtoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutVendedorInput | produtoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumtipo_vendedorFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_vendedor | Enumtipo_vendedorFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_vendedorFilter<$PrismaModel> | $Enums.tipo_vendedor
  }

  export type NestedEnumtipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_documento | Enumtipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_documentoFilter<$PrismaModel> | $Enums.tipo_documento
  }

  export type NestedEnumtipo_vendedorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_vendedor | Enumtipo_vendedorFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_vendedor[] | ListEnumtipo_vendedorFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_vendedorWithAggregatesFilter<$PrismaModel> | $Enums.tipo_vendedor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_vendedorFilter<$PrismaModel>
    _max?: NestedEnumtipo_vendedorFilter<$PrismaModel>
  }

  export type NestedEnumtipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_documento | Enumtipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_documento[] | ListEnumtipo_documentoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumtipo_documentoFilter<$PrismaModel>
  }

  export type vendedorCreateWithoutAssociacaoInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    atende_um?: atende_umCreateNestedManyWithoutVendedorInput
    produto?: produtoCreateNestedManyWithoutVendedorInput
  }

  export type vendedorUncheckedCreateWithoutAssociacaoInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    atende_um?: atende_umUncheckedCreateNestedManyWithoutVendedorInput
    produto?: produtoUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type vendedorCreateOrConnectWithoutAssociacaoInput = {
    where: vendedorWhereUniqueInput
    create: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput>
  }

  export type vendedorCreateManyAssociacaoInputEnvelope = {
    data: vendedorCreateManyAssociacaoInput | vendedorCreateManyAssociacaoInput[]
    skipDuplicates?: boolean
  }

  export type vendedorUpsertWithWhereUniqueWithoutAssociacaoInput = {
    where: vendedorWhereUniqueInput
    update: XOR<vendedorUpdateWithoutAssociacaoInput, vendedorUncheckedUpdateWithoutAssociacaoInput>
    create: XOR<vendedorCreateWithoutAssociacaoInput, vendedorUncheckedCreateWithoutAssociacaoInput>
  }

  export type vendedorUpdateWithWhereUniqueWithoutAssociacaoInput = {
    where: vendedorWhereUniqueInput
    data: XOR<vendedorUpdateWithoutAssociacaoInput, vendedorUncheckedUpdateWithoutAssociacaoInput>
  }

  export type vendedorUpdateManyWithWhereWithoutAssociacaoInput = {
    where: vendedorScalarWhereInput
    data: XOR<vendedorUpdateManyMutationInput, vendedorUncheckedUpdateManyWithoutAssociacaoInput>
  }

  export type vendedorScalarWhereInput = {
    AND?: vendedorScalarWhereInput | vendedorScalarWhereInput[]
    OR?: vendedorScalarWhereInput[]
    NOT?: vendedorScalarWhereInput | vendedorScalarWhereInput[]
    nome?: StringFilter<"vendedor"> | string
    telefone?: StringFilter<"vendedor"> | string
    endereco_venda?: StringFilter<"vendedor"> | string
    tipo_vendedor?: Enumtipo_vendedorFilter<"vendedor"> | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFilter<"vendedor"> | $Enums.tipo_documento
    numero_documento?: StringNullableFilter<"vendedor"> | string | null
    id_vendedor?: UuidFilter<"vendedor"> | string
    fk_associacao?: UuidNullableFilter<"vendedor"> | string | null
  }

  export type pedidoCreateWithoutAtende_umInput = {
    data_pedido?: Date | string
    endereco_entrega: string
    cliente?: clienteCreateNestedOneWithoutPedidoInput
    feira?: feiraCreateNestedOneWithoutPedidoInput
    produto?: produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutAtende_umInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
    fk_cliente?: string | null
    produto?: produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutAtende_umInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutAtende_umInput, pedidoUncheckedCreateWithoutAtende_umInput>
  }

  export type vendedorCreateWithoutAtende_umInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    produto?: produtoCreateNestedManyWithoutVendedorInput
    associacao?: associacaoCreateNestedOneWithoutVendedorInput
  }

  export type vendedorUncheckedCreateWithoutAtende_umInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    fk_associacao?: string | null
    produto?: produtoUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type vendedorCreateOrConnectWithoutAtende_umInput = {
    where: vendedorWhereUniqueInput
    create: XOR<vendedorCreateWithoutAtende_umInput, vendedorUncheckedCreateWithoutAtende_umInput>
  }

  export type pedidoUpsertWithoutAtende_umInput = {
    update: XOR<pedidoUpdateWithoutAtende_umInput, pedidoUncheckedUpdateWithoutAtende_umInput>
    create: XOR<pedidoCreateWithoutAtende_umInput, pedidoUncheckedCreateWithoutAtende_umInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutAtende_umInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutAtende_umInput, pedidoUncheckedUpdateWithoutAtende_umInput>
  }

  export type pedidoUpdateWithoutAtende_umInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
    feira?: feiraUpdateOneWithoutPedidoNestedInput
    produto?: produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutAtende_umInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type vendedorUpsertWithoutAtende_umInput = {
    update: XOR<vendedorUpdateWithoutAtende_umInput, vendedorUncheckedUpdateWithoutAtende_umInput>
    create: XOR<vendedorCreateWithoutAtende_umInput, vendedorUncheckedCreateWithoutAtende_umInput>
    where?: vendedorWhereInput
  }

  export type vendedorUpdateToOneWithWhereWithoutAtende_umInput = {
    where?: vendedorWhereInput
    data: XOR<vendedorUpdateWithoutAtende_umInput, vendedorUncheckedUpdateWithoutAtende_umInput>
  }

  export type vendedorUpdateWithoutAtende_umInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    produto?: produtoUpdateManyWithoutVendedorNestedInput
    associacao?: associacaoUpdateOneWithoutVendedorNestedInput
  }

  export type vendedorUncheckedUpdateWithoutAtende_umInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    fk_associacao?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type pedidoCreateWithoutClienteInput = {
    data_pedido?: Date | string
    endereco_entrega: string
    atende_um?: atende_umCreateNestedManyWithoutPedidoInput
    feira?: feiraCreateNestedOneWithoutPedidoInput
    produto?: produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutClienteInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutPedidoInput
    produto?: produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoCreateManyClienteInputEnvelope = {
    data: pedidoCreateManyClienteInput | pedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type pedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
  }

  export type pedidoUpdateManyWithWhereWithoutClienteInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    pedido_id?: IntFilter<"pedido"> | number
    data_pedido?: DateTimeFilter<"pedido"> | Date | string
    endereco_entrega?: StringFilter<"pedido"> | string
    fk_feira?: IntNullableFilter<"pedido"> | number | null
    fk_cliente?: StringNullableFilter<"pedido"> | string | null
  }

  export type pedidoCreateWithoutFeiraInput = {
    data_pedido?: Date | string
    endereco_entrega: string
    atende_um?: atende_umCreateNestedManyWithoutPedidoInput
    cliente?: clienteCreateNestedOneWithoutPedidoInput
    produto?: produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutFeiraInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_cliente?: string | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutPedidoInput
    produto?: produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutFeiraInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput>
  }

  export type pedidoCreateManyFeiraInputEnvelope = {
    data: pedidoCreateManyFeiraInput | pedidoCreateManyFeiraInput[]
    skipDuplicates?: boolean
  }

  export type pedidoUpsertWithWhereUniqueWithoutFeiraInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutFeiraInput, pedidoUncheckedUpdateWithoutFeiraInput>
    create: XOR<pedidoCreateWithoutFeiraInput, pedidoUncheckedCreateWithoutFeiraInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutFeiraInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutFeiraInput, pedidoUncheckedUpdateWithoutFeiraInput>
  }

  export type pedidoUpdateManyWithWhereWithoutFeiraInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutFeiraInput>
  }

  export type atende_umCreateWithoutPedidoInput = {
    vendedor: vendedorCreateNestedOneWithoutAtende_umInput
  }

  export type atende_umUncheckedCreateWithoutPedidoInput = {
    id_vendedor: string
  }

  export type atende_umCreateOrConnectWithoutPedidoInput = {
    where: atende_umWhereUniqueInput
    create: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput>
  }

  export type atende_umCreateManyPedidoInputEnvelope = {
    data: atende_umCreateManyPedidoInput | atende_umCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutPedidoInput = {
    cpf: string
    nome: string
    email: string
    telefone: string
  }

  export type clienteUncheckedCreateWithoutPedidoInput = {
    cpf: string
    nome: string
    email: string
    telefone: string
  }

  export type clienteCreateOrConnectWithoutPedidoInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
  }

  export type feiraCreateWithoutPedidoInput = {
    nome: string
    endereco: string
  }

  export type feiraUncheckedCreateWithoutPedidoInput = {
    id_feira?: number
    nome: string
    endereco: string
  }

  export type feiraCreateOrConnectWithoutPedidoInput = {
    where: feiraWhereUniqueInput
    create: XOR<feiraCreateWithoutPedidoInput, feiraUncheckedCreateWithoutPedidoInput>
  }

  export type produtoCreateWithoutPedidoInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    vendedor?: vendedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutPedidoInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    fk_vendedor?: string | null
  }

  export type produtoCreateOrConnectWithoutPedidoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
  }

  export type produtoCreateManyPedidoInputEnvelope = {
    data: produtoCreateManyPedidoInput | produtoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type atende_umUpsertWithWhereUniqueWithoutPedidoInput = {
    where: atende_umWhereUniqueInput
    update: XOR<atende_umUpdateWithoutPedidoInput, atende_umUncheckedUpdateWithoutPedidoInput>
    create: XOR<atende_umCreateWithoutPedidoInput, atende_umUncheckedCreateWithoutPedidoInput>
  }

  export type atende_umUpdateWithWhereUniqueWithoutPedidoInput = {
    where: atende_umWhereUniqueInput
    data: XOR<atende_umUpdateWithoutPedidoInput, atende_umUncheckedUpdateWithoutPedidoInput>
  }

  export type atende_umUpdateManyWithWhereWithoutPedidoInput = {
    where: atende_umScalarWhereInput
    data: XOR<atende_umUpdateManyMutationInput, atende_umUncheckedUpdateManyWithoutPedidoInput>
  }

  export type atende_umScalarWhereInput = {
    AND?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
    OR?: atende_umScalarWhereInput[]
    NOT?: atende_umScalarWhereInput | atende_umScalarWhereInput[]
    id_pedido?: IntFilter<"atende_um"> | number
    id_vendedor?: UuidFilter<"atende_um"> | string
  }

  export type clienteUpsertWithoutPedidoInput = {
    update: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type clienteUpdateWithoutPedidoInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateWithoutPedidoInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type feiraUpsertWithoutPedidoInput = {
    update: XOR<feiraUpdateWithoutPedidoInput, feiraUncheckedUpdateWithoutPedidoInput>
    create: XOR<feiraCreateWithoutPedidoInput, feiraUncheckedCreateWithoutPedidoInput>
    where?: feiraWhereInput
  }

  export type feiraUpdateToOneWithWhereWithoutPedidoInput = {
    where?: feiraWhereInput
    data: XOR<feiraUpdateWithoutPedidoInput, feiraUncheckedUpdateWithoutPedidoInput>
  }

  export type feiraUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type feiraUncheckedUpdateWithoutPedidoInput = {
    id_feira?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type produtoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutPedidoInput, produtoUncheckedUpdateWithoutPedidoInput>
    create: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutPedidoInput, produtoUncheckedUpdateWithoutPedidoInput>
  }

  export type produtoUpdateManyWithWhereWithoutPedidoInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type produtoScalarWhereInput = {
    AND?: produtoScalarWhereInput | produtoScalarWhereInput[]
    OR?: produtoScalarWhereInput[]
    NOT?: produtoScalarWhereInput | produtoScalarWhereInput[]
    id_produto?: UuidFilter<"produto"> | string
    nome?: StringFilter<"produto"> | string
    categoria?: StringFilter<"produto"> | string
    qntd?: IntFilter<"produto"> | number
    data_coleta?: DateTimeFilter<"produto"> | Date | string
    preco?: FloatFilter<"produto"> | number
    id_pedido?: IntNullableFilter<"produto"> | number | null
    fk_vendedor?: UuidNullableFilter<"produto"> | string | null
  }

  export type vendedorCreateWithoutProdutoInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    atende_um?: atende_umCreateNestedManyWithoutVendedorInput
    associacao?: associacaoCreateNestedOneWithoutVendedorInput
  }

  export type vendedorUncheckedCreateWithoutProdutoInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
    fk_associacao?: string | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type vendedorCreateOrConnectWithoutProdutoInput = {
    where: vendedorWhereUniqueInput
    create: XOR<vendedorCreateWithoutProdutoInput, vendedorUncheckedCreateWithoutProdutoInput>
  }

  export type pedidoCreateWithoutProdutoInput = {
    data_pedido?: Date | string
    endereco_entrega: string
    atende_um?: atende_umCreateNestedManyWithoutPedidoInput
    cliente?: clienteCreateNestedOneWithoutPedidoInput
    feira?: feiraCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutProdutoInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
    fk_cliente?: string | null
    atende_um?: atende_umUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutProdutoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type vendedorUpsertWithoutProdutoInput = {
    update: XOR<vendedorUpdateWithoutProdutoInput, vendedorUncheckedUpdateWithoutProdutoInput>
    create: XOR<vendedorCreateWithoutProdutoInput, vendedorUncheckedCreateWithoutProdutoInput>
    where?: vendedorWhereInput
  }

  export type vendedorUpdateToOneWithWhereWithoutProdutoInput = {
    where?: vendedorWhereInput
    data: XOR<vendedorUpdateWithoutProdutoInput, vendedorUncheckedUpdateWithoutProdutoInput>
  }

  export type vendedorUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutVendedorNestedInput
    associacao?: associacaoUpdateOneWithoutVendedorNestedInput
  }

  export type vendedorUncheckedUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    fk_associacao?: NullableStringFieldUpdateOperationsInput | string | null
    atende_um?: atende_umUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type pedidoUpsertWithoutProdutoInput = {
    update: XOR<pedidoUpdateWithoutProdutoInput, pedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutProdutoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutProdutoInput, pedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type pedidoUpdateWithoutProdutoInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
    feira?: feiraUpdateOneWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutProdutoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    atende_um?: atende_umUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type atende_umCreateWithoutVendedorInput = {
    pedido: pedidoCreateNestedOneWithoutAtende_umInput
  }

  export type atende_umUncheckedCreateWithoutVendedorInput = {
    id_pedido: number
  }

  export type atende_umCreateOrConnectWithoutVendedorInput = {
    where: atende_umWhereUniqueInput
    create: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput>
  }

  export type atende_umCreateManyVendedorInputEnvelope = {
    data: atende_umCreateManyVendedorInput | atende_umCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type produtoCreateWithoutVendedorInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    pedido?: pedidoCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutVendedorInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    id_pedido?: number | null
  }

  export type produtoCreateOrConnectWithoutVendedorInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput>
  }

  export type produtoCreateManyVendedorInputEnvelope = {
    data: produtoCreateManyVendedorInput | produtoCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type associacaoCreateWithoutVendedorInput = {
    id_associacao?: string
    nome: string
    descricao: string
  }

  export type associacaoUncheckedCreateWithoutVendedorInput = {
    id_associacao?: string
    nome: string
    descricao: string
  }

  export type associacaoCreateOrConnectWithoutVendedorInput = {
    where: associacaoWhereUniqueInput
    create: XOR<associacaoCreateWithoutVendedorInput, associacaoUncheckedCreateWithoutVendedorInput>
  }

  export type atende_umUpsertWithWhereUniqueWithoutVendedorInput = {
    where: atende_umWhereUniqueInput
    update: XOR<atende_umUpdateWithoutVendedorInput, atende_umUncheckedUpdateWithoutVendedorInput>
    create: XOR<atende_umCreateWithoutVendedorInput, atende_umUncheckedCreateWithoutVendedorInput>
  }

  export type atende_umUpdateWithWhereUniqueWithoutVendedorInput = {
    where: atende_umWhereUniqueInput
    data: XOR<atende_umUpdateWithoutVendedorInput, atende_umUncheckedUpdateWithoutVendedorInput>
  }

  export type atende_umUpdateManyWithWhereWithoutVendedorInput = {
    where: atende_umScalarWhereInput
    data: XOR<atende_umUpdateManyMutationInput, atende_umUncheckedUpdateManyWithoutVendedorInput>
  }

  export type produtoUpsertWithWhereUniqueWithoutVendedorInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutVendedorInput, produtoUncheckedUpdateWithoutVendedorInput>
    create: XOR<produtoCreateWithoutVendedorInput, produtoUncheckedCreateWithoutVendedorInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutVendedorInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutVendedorInput, produtoUncheckedUpdateWithoutVendedorInput>
  }

  export type produtoUpdateManyWithWhereWithoutVendedorInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutVendedorInput>
  }

  export type associacaoUpsertWithoutVendedorInput = {
    update: XOR<associacaoUpdateWithoutVendedorInput, associacaoUncheckedUpdateWithoutVendedorInput>
    create: XOR<associacaoCreateWithoutVendedorInput, associacaoUncheckedCreateWithoutVendedorInput>
    where?: associacaoWhereInput
  }

  export type associacaoUpdateToOneWithWhereWithoutVendedorInput = {
    where?: associacaoWhereInput
    data: XOR<associacaoUpdateWithoutVendedorInput, associacaoUncheckedUpdateWithoutVendedorInput>
  }

  export type associacaoUpdateWithoutVendedorInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type associacaoUncheckedUpdateWithoutVendedorInput = {
    id_associacao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type vendedorCreateManyAssociacaoInput = {
    nome: string
    telefone: string
    endereco_venda: string
    tipo_vendedor: $Enums.tipo_vendedor
    tipo_documento: $Enums.tipo_documento
    numero_documento?: string | null
    id_vendedor: string
  }

  export type vendedorUpdateWithoutAssociacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutVendedorNestedInput
    produto?: produtoUpdateManyWithoutVendedorNestedInput
  }

  export type vendedorUncheckedUpdateWithoutAssociacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUncheckedUpdateManyWithoutVendedorNestedInput
    produto?: produtoUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type vendedorUncheckedUpdateManyWithoutAssociacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_venda?: StringFieldUpdateOperationsInput | string
    tipo_vendedor?: Enumtipo_vendedorFieldUpdateOperationsInput | $Enums.tipo_vendedor
    tipo_documento?: Enumtipo_documentoFieldUpdateOperationsInput | $Enums.tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoCreateManyClienteInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_feira?: number | null
  }

  export type pedidoUpdateWithoutClienteInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutPedidoNestedInput
    feira?: feiraUpdateOneWithoutPedidoNestedInput
    produto?: produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
    atende_um?: atende_umUncheckedUpdateManyWithoutPedidoNestedInput
    produto?: produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_feira?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedidoCreateManyFeiraInput = {
    pedido_id?: number
    data_pedido?: Date | string
    endereco_entrega: string
    fk_cliente?: string | null
  }

  export type pedidoUpdateWithoutFeiraInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    atende_um?: atende_umUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
    produto?: produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutFeiraInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    atende_um?: atende_umUncheckedUpdateManyWithoutPedidoNestedInput
    produto?: produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutFeiraInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco_entrega?: StringFieldUpdateOperationsInput | string
    fk_cliente?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atende_umCreateManyPedidoInput = {
    id_vendedor: string
  }

  export type produtoCreateManyPedidoInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    fk_vendedor?: string | null
  }

  export type atende_umUpdateWithoutPedidoInput = {
    vendedor?: vendedorUpdateOneRequiredWithoutAtende_umNestedInput
  }

  export type atende_umUncheckedUpdateWithoutPedidoInput = {
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type atende_umUncheckedUpdateManyWithoutPedidoInput = {
    id_vendedor?: StringFieldUpdateOperationsInput | string
  }

  export type produtoUpdateWithoutPedidoInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    vendedor?: vendedorUpdateOneWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutPedidoInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    fk_vendedor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoUncheckedUpdateManyWithoutPedidoInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    fk_vendedor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atende_umCreateManyVendedorInput = {
    id_pedido: number
  }

  export type produtoCreateManyVendedorInput = {
    id_produto?: string
    nome: string
    categoria: string
    qntd: number
    data_coleta: Date | string
    preco: number
    id_pedido?: number | null
  }

  export type atende_umUpdateWithoutVendedorInput = {
    pedido?: pedidoUpdateOneRequiredWithoutAtende_umNestedInput
  }

  export type atende_umUncheckedUpdateWithoutVendedorInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
  }

  export type atende_umUncheckedUpdateManyWithoutVendedorInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
  }

  export type produtoUpdateWithoutVendedorInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    pedido?: pedidoUpdateOneWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutVendedorInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produtoUncheckedUpdateManyWithoutVendedorInput = {
    id_produto?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    qntd?: IntFieldUpdateOperationsInput | number
    data_coleta?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: FloatFieldUpdateOperationsInput | number
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}