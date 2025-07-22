import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Try to get Cloud SQL Unix socket settings
instance_unix_socket = os.getenv("INSTANCE_UNIX_SOCKET")
db_user = os.getenv("DB_USER", "postgres")
db_pass = os.getenv("DB_PASS", "")
db_name = os.getenv("DB_NAME", "postgres")

if instance_unix_socket:
    # Cloud Run / Cloud SQL Unix socket connection
    SQLALCHEMY_DATABASE_URL = (
        f"postgresql+psycopg2://{db_user}:{db_pass}@/{db_name}?host={instance_unix_socket}"
    )
else:
    # Local development or DATABASE_URL provided
    SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
    if not SQLALCHEMY_DATABASE_URL:
        raise ValueError("DATABASE_URL or INSTANCE_UNIX_SOCKET must be set in environment variables")

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
