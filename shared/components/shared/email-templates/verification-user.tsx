interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <p>
        Verification code: <h2>{code}</h2>
      </p>

      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
          Confirm your email
        </a>
      </p>
    </div>
  );
};
