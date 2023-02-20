SELECT DISTINCT T.address
FROM trades T
INNER JOIN (
    SELECT address, SUM(CASE 
               WHEN denom = 'usdc' THEN amount * 0.000001
               WHEN denom = 'swth' THEN amount * 0.00000005
               WHEN denom = 'tmz' THEN amount * 0.003
               END) AS total_balance
    FROM balances
    GROUP BY address
) AS A ON T.address = A.address
WHERE T.block_height > 730000 AND A.total_balance >= 500;
